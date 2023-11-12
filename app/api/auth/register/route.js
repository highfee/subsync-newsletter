import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import User from "@/models/user";
import dbConnect from "@/lib/dbConnect";

const MAX_AGE = 60 * 60 * 24; // days;

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  const { fullname, email } = body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return new Response(JSON.stringify("User already exist"), {
        status: 405,
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await user.save();

    const secret = process.env.JWT_SECRET || "";
    const isAdmin = false;

    const token = sign(
      {
        email,
        isAdmin,
      },
      secret,
      {
        expiresIn: MAX_AGE,
      }
    );

    const seralized = serialize("me", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    const { password, ...others } = user._doc;

    return new Response(JSON.stringify({ res: others }), {
      status: 200,
      headers: {
        "Set-Cookie": seralized,
        // "Set-Cookie": await getCsrfToken(options),
      },
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
