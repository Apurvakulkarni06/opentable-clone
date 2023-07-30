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
  if (req.method === "POST") {
    const { firstName, lastName, email, phoneNumber, city, password } =
      req.body;

    //Validating user input
    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage:
          "First name is Invalid. It should be min 1 Character and 20 Max",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMessage:
          "Last name is Invalid. It should be min 1 Character and 20 Max",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email  is Invalid.",
      },
      {
        valid: validator.isMobilePhone(phoneNumber),
        errorMessage: "Phone number is Invalid",
      },
      {
        valid: validator.isLength(city, {
          min: 1,
        }),
        errorMessage: "City name is Invalid.",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Passowrd is not Strong.",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({
        errorMessage: errors[0],
      });
    }
    // validate if user doesn't already have account in db
    const userWithEMail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log("userWithEMail:", userWithEMail);

    if (userWithEMail) {
      return res.status(400).json({
        errorMessage: "Email is already associated with another account exists",
      });
    }

    // hash the password

    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        password: hashedPassword,
        city,
        phone: phoneNumber,
        email,
      },
    });

    // create jwt token
    const alg = "HS256";

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    setCookie("jwt", token,{req, res, maxAge: 60*6*24 })  

    res.status(200).json({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phoneNumber: user.phone,
      city: user.city
    });
  }

  return res.status(404).json("Unknown endpoint")
}
