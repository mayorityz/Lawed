import mongoose from "mongoose";

const caseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    extraQuestions: {
      type: String,
    },
    postedBy: {
      type: String,
      required: true,
    },
    status: {
      default: 0,
      type: Number,
    },
  },
  { timestamps: true }
);

const Case = mongoose.model("case", caseSchema);

export default Case;
