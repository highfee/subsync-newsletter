import { NextResponse } from "next/server";
import Mail from "@/models/mail";
import dbConnect from "@/lib/dbConnect";
import Brands from "@/models/brands";

export async function GET(request, { params }) {
  dbConnect();
  try {
    const id = params.id;

    const news = await Mail.findById(id);

    const newsOwner = await Brands.findOne({ name: news.sender });

    return NextResponse.json({ res: news, newsOwner });
  } catch (error) {
    return NextResponse({ error });
  }
}
