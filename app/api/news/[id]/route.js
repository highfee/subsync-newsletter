import { NextResponse } from "next/server";
import Mail from "@/models/mail";
import dbConnect from "@/lib/dbConnect";

export async function GET(request, { params }) {
  try {
    const id = params.id;

    const news = await Mail.findById(id);

    return NextResponse.json({ res: news });
  } catch (error) {
    return NextResponse({ error });
  }
}
