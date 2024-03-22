import * as dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App runs on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
