import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/userController.js";
import { signupValidator, validate } from "../utils/validators.js";

export const userRouter = Router();

// GET
userRouter.get("/", getAllUsers);

// POST
userRouter.post("/signup", validate(signupValidator), userSignup);
