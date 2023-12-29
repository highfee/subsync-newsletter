import mongoose from "mongoose";

const URI =
  process.env.ENV === "development"
    ? process.env.MONGODB_URI_DEVELOPMENT
    : process.env.MONGODB_URI_PRODUCTION;

if (!URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    console.log("Error", error);
    process.exit(1);
  }
};

export default dbConnect;
