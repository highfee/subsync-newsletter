//
//

import dbConnect from "@/lib/dbConnect";
import { signJwtAccessToken } from "@/lib/jwt";
import User from "@/models/user";
import * as bcrypt from "bcrypt";

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  const user = await User.findOne({
    email: body.email,
  });

  if (!user) {
    return new Response(JSON.stringify("user not found"));
  }

  const comparePassword = await bcrypt.compare(body.password, user.password);
  if (body.email === user.email && comparePassword) {
    const { paswword, ...others } = user._doc;
    const accessToken = signJwtAccessToken({
      email: others.email,
      isAdmin: others.isAdmin,
      isBrand: others.isBrand,
    });

    const result = {
      ...others,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else {
    return null;
  }
}
