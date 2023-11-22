import mongoose from "mongoose";

const Brands = mongoose.Schema(
  {
    name: String,
    logoUrl: String,
    categories: {
      type: String,
      default: "Others",
    },
    gottenFrom: {
      type: String,
      default: "from mail",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Brands || mongoose.model("Brands", Brands);
