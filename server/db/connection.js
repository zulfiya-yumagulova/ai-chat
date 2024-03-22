import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

// Create DB variable
const DB = process.env.MONGODB_URL;

export async function connectToDatabase() {
  try {
    await mongoose.connect(DB, console.log("DB connection is successful"));
  } catch (error) {}
  throw new Error("Couldn't connect to DB");
}

export async function disconectDatabase() {
  try {
    await mongoose.disconnect(DB, console.log("DB"));
  } catch (error) {}
}
