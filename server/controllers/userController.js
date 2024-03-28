import { User } from "../models/User.js";
import { hash } from "bcrypt";

// GET all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      message: "success",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      message: "ERROR",
      cause: error,
    });
  }
};

// POST User
export const userSignup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashedPassword = await hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();
  if (user) {
    return res.status(200).json({
      message: "success",
      user,
    });
  } else {
    console.log(error);
    res.status(403).json({
      message: "ERROR",
      cause: error,
    });
  }
};
