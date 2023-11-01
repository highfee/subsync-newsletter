import mongoose from "mongoose";

const Categories = mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Categories ||
  mongoose.model("Categories", Categories);
