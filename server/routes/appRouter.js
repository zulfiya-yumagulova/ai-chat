import { Router } from "express";
import { userRouter } from "./userRouter.js";
import { chatRouter } from "./chatRouter.js";

export const appRouter = Router();

appRouter.use("/user", userRouter);
appRouter.use("/chats", chatRouter);
