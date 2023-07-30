import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
export async function middleware(req: NextRequest, res: NextResponse) {
  const breaerToken = req.headers.get("authorization") as string;

  if (!breaerToken) {
    return NextResponse.json(
      {
        errorMessage: "Unauthorized Request",
      },
      { status: 401 }
    );
  }

  const token = breaerToken.split(" ")[1];

  if (!token) {
    return NextResponse.json(
      {
        errorMessage: "Unauthorized Request",
      },
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return NextResponse.json(
      {
        errorMessage: "Unauthorized Request",
      },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/auth/me"],
};
