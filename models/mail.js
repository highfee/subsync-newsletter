import mongoose from "mongoose";

const Mails = new mongoose.Schema(
  {
    _id: {
      type: String,
      require: true,
      unique: true,
    },
    snippet: String,
    received_date: {
      type: Date,
      default: new Date(),
    },
    sent_date: {
      type: Date,
      default: new Date(),
    },
    sender: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    category: {
      type: [String],
    },
    data: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

Mails.pre("save", function (next) {
  if (this.category && typeof this.category == "string") {
    this.category = this.category.split(",").map((item) => item.trim());
    console.log(this.category);
  }
  next();
});

export default mongoose.models.Mails || mongoose.model("Mails", Mails);
