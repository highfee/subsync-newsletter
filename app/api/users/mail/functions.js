import { google } from "googleapis";

import * as Cheerio from "cheerio";

import { OPEN_AI_CATEGORY_PROMPT } from "@/lib/utils";

import OpenAI from "openai";

const OPEN_AI_KEY = process.env.OPEN_AI_KEY;
const gpt3 = new OpenAI({
  apiKey: OPEN_AI_KEY,
});

export const getMessageBody = (message) => {
  if (message.payload.body && message.payload.body.size > 0) {
    return message.payload.body.data;
  } else if (message.payload.parts && message.payload.parts.length > 0) {
    const textPart = message.payload.parts.find(
      (part) => part.mimeType === "text/html"
    );
    if (textPart) {
      return textPart.body.data;
    }
  }

  return "";
};

export const decodeData = (message) => {
  const data = getMessageBody(message);
  return Buffer.from(data, "base64").toString("utf-8");
};

export const getSender = (sender) => {
  if (sender.startsWith('"')) {
    return sender.slice(1, sender.indexOf("<") - 1).replaceAll('"', "");
  }
  return sender.slice(0, sender.indexOf("<") - 1).replaceAll('"', "");
};

export const getMessageCategory = async (message) => {
  const res = await gpt3.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "system",
        content: OPEN_AI_CATEGORY_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
    ],
    temperature: 1,
    max_tokens: 50,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  let category = res.choices[0].message.content;
  return category;
};

export const fetchMails = async () => {
  const GOOGLE_CLIENT_ID = process.env.google_client_id;
  const GOOGLE_CLIENT_SECRET = process.env.google_client_secret;
  const GOOGLE_REDIRECT_URL = process.env.google_redirect_uri;

  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URL
  );
  // const authUrl = oauth2Client.generateAuthUrl({
  //   access_type: "offline",
  //   scope: ["https://www.googleapis.com/auth/gmail.modify"],
  // });

  oauth2Client.setCredentials({
    refresh_token: process.env.google_refresh_token,
  });
  const gmail = google.gmail({ version: "v1", auth: oauth2Client });

  const res = await gmail.users.messages.list({
    userId: "me",
    maxResults: 10,
    q: `category:promotions`,
  });

  const messageIds = res.data.messages.map((message) => message.id);

  return { messageIds, gmail };
};

export async function fetchSenderLogo2(message) {
  const html = decodeData(message);
  const load = Cheerio.load(html);
  const images = load("img");
  const minimumWidth = 40;
  let firstImageWithMinimumWidth = null;
  images.each((i, elem) => {
    const image = load(elem);
    const width = parseInt(image.attr("width"), 10);
    if (!isNaN(width) && width > minimumWidth) {
      firstImageWithMinimumWidth = image.attr("src");
      return false;
    }
  });
  return firstImageWithMinimumWidth;
}

// category.split(",").map(async (item) => {
//   const categoryExist = await Categories.findOne({
//     name: item.toLocaleLowerCase(),
//   });

//   if (!categoryExist) {
//     const cat = new Categories({
//       name: item.toLocaleLowerCase(),
//     });
//     await cat.save();
//   }

//   await Brands.updateOne(
//     { name: sender, categories: { $ne: item } },
//     { $addToSet: { categories: item } }
//   );
// });
