import { User } from "../models/User.js";
import { hash, compare } from "bcrypt";

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
  //   Check if User already exists
  const duplicateUser = await User.findOne({ email });
  if (duplicateUser) {
    return res.status(402).send("User already registered");
  }

  const hashedPassword = await hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();
  if (user) {
    return res.status(201).json({
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

// User Login Request

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    // Check if User exists
    if (!existingUser) {
      return res.status(401).send("User is not registered");
    }
    // Check if password is correct
    const isPasswordCorrect = await compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(403).send("Incorrect password");
    }
    // Success (User exists and password is correct)
    return res
      .status(200)
      .json({ message: "success", id: existingUser._id.toString() });
  } catch (error) {
    return res.status(400).json({ message: "ERROR", error });
  }

  // await user.save();
  // if (user) {
  //   return res.status(201).json({
  //     message: "success",
  //     user,
  //   });
  // } else {
  //   console.log(error);
  //   res.status(403).json({
  //     message: "ERROR",
  //     cause: error,
  //   });
  // }
};
