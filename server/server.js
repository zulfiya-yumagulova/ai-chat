import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { app } from "./app.js";

const PORT = process.env.PORT;
const DB = process.env.MONGODB_URL;

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App runs on port ${PORT}`);
    });
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => console.log(error));
