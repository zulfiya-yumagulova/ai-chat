import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/userController.js";

export const userRouter = Router();

// GET
userRouter.get("/", getAllUsers);

// POST
userRouter.post("/signup", userSignup);
