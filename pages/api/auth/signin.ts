
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";


const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("req.method:", req.method);
  if (req.method === "POST") {
    const { email, password } = req.body;

    // validate user input
    const errors: string[] = [];
    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is Invalid",
      },
      {
        valid: validator.isLength(password, {
          min: 1,
        }),
        errorMessage: "Password is Invalid",
      },
    ];
    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    // validate the use has an account
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res
        .status(401)
        .json({ errorMessage: "User with Email does not exists" });
    }

    //compare hased password
    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(401).json({ errorMessage: "Password does not exists" });
    }
    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60*6*24})  

    return res.status(200).json({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phoneNumber: user.phone,
      city: user.city
    });
  }
  return res.status(404).json("Unknown endpoint");
}
