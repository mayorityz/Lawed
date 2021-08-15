import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      default: 0,
      type: String,
    },
    role: {
      type: String,
      enum: ["lawyer", "client"],
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("users", userSchema);

export default Users;
