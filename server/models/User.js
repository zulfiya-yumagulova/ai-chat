import mongoose from "mongoose";
import { ChatSchema } from "./Chat.js";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: ture,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [ChatSchema],
});

export const User = mongoose.model("User", UserSchema);
