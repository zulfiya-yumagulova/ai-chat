import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.MONGODB_URL;

// Middleware
app.use(express.json());

mongoose.connect(DB).then(() => {
  console.log("DB connection is successful");
  app.listen(PORT, () => {
    console.log(`App runs on port ${PORT}`);
  });
});
