import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    fromOAuth: Boolean,
    followedBrands: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    followedCategories: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBrand: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);
