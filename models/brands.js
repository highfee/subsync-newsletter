import mongoose from "mongoose";

const Brands = mongoose.Schema(
  {
    name: String,
    logoUrl: {
      type: String,
      default: "",
    },
    categories: {
      type: [String],
      default: [],
    },
    gottenFrom: {
      type: String,
      default: "from mail",
    },
    description: {
      type: String,
      default: "",
    },
    webUrl: {
      type: String,
      default: "",
    },
    fullname: {
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
    isBrand: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Brands || mongoose.model("Brands", Brands);
