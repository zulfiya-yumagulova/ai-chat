import express from "express";
import cookieParser from "cookie-parser";

export const app = express();

// Middleware
app.use(express.json());
// Cookie parser middleware
app.use(cookieParser());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
