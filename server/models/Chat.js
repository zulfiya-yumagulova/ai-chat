import mongoose from "mongoose";
import { randomUUID } from "crypto";

export const ChatSchema = new mongoose.Schema({
  id: {
    type: String,
    default: randomUUID(),
  },
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export const Chat = mongoose.model("Chat", ChatSchema);
