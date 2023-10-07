import { NextResponse } from "next/server";
import { google } from "googleapis";
// import dbConnect from "@/lib/dbConnect";
import Test from "@/models/test";

export async function GET() {
  // await dbConnect();

  // const test = await Test.find();

  try {
    const GOOGLE_CLIENT_ID = process.env.google_client_id;
    const GOOGLE_CLIENT_SECRET = process.env.google_client_secret;
    const GOOGLE_REDIRECT_URL = process.env.google_redirect_uri;

    const oauth2Client = new google.auth.OAuth2(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      GOOGLE_REDIRECT_URL
    );
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/gmail.modify"],
    });

    oauth2Client.setCredentials({
      refresh_token:
        "1//04D0ZcX4CxWRKCgYIARAAGAQSNwF-L9IrUW1zZjOM4BTQr8kX4uS5Kvk8GqySfd3q4ZM8XMgy3I1ytGq739vE4wPeSr_ACWc7Jss",
    });

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const res = await gmail.users.messages.list({
      userId: "me",
      maxResults: 10,
      q: `category:promotions`,
    });
    const messageIds = res.data.messages.map((message) => message.id);

    const messages = [];

    for (const messageId of messageIds) {
      const message = await gmail.users.messages.get({
        userId: "me",
        id: messageId,
        format: "full", // Request the full message content
      });

      messages.push(message.data);
    }
    return NextResponse.json({
      res: messages,
    });
  } catch (error) {
    NextResponse.json({ message: "something went wrong" });
  }
}
