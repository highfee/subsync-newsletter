import { NextResponse } from "next/server";
import Mail from "@/models/mail";
import Brands from "@/models/brands";
import dbConnect from "@/lib/dbConnect";

export const GET = async (request, { params }) => {
  await dbConnect();
  try {
    const brandName = params.name;

    const brand = await Brands.findOne({
      name: { $regex: new RegExp(brandName, "i") },
    });

    const mails = await Mail.find({
      sender: { $regex: new RegExp(brandName, "i") },
    });
    return NextResponse.json({ mails: mails, brand: brand });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
