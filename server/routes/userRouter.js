import { Router } from "express";
import {
  getAllUsers,
  userLogin,
  userSignup,
} from "../controllers/userController.js";
import {
  loginValidator,
  signupValidator,
  validate,
} from "../utils/validators.js";

export const userRouter = Router();

// GET
userRouter.get("/", getAllUsers);

// POST
userRouter.post("/signup", validate(signupValidator), userSignup);
userRouter.post("/login", validate(loginValidator), userLogin);
