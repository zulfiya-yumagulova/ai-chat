import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { appRouter } from "./routes/appRouter.js";

export const app = express();

// Middleware
app.use(express.json());
// Cookie parser middleware
app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/v1", appRouter);

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
