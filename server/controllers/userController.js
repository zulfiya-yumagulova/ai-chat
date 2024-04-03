import { User } from "../models/User.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

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

// POST User sign up request
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

  // Generate JWT Token
  const token = createToken(user._id.toString(), user.email, "7d");

  // Create expire token validation
  const expiresIn = new Date();
  expiresIn.setDate(expiresIn.getDate() + 7);

  res.cookie("auth_token", token, {
    expiresIn,
    httpOnly: true,
    signed: true,
  });

  // Remove previous cookies and asiign new
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    domain: "localhost",
    signed: true,
    path: "/",
  });

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

// POST  User Login Request

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
    // // Generate JWT Token
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Create expire token validation
    // const expiresIn = new Date();
    // expiresIn.setDate(expiresIn.getDate() + 7);

    // res.cookie("auth_token", token, {
    //   expiresIn,
    //   httpOnly: true,
    //   signed: true,
    // });

    // // // Remove previous cookies and asiign new
    // res.clearCookie("auth_token", {
    //   httpOnly: true,
    //   domain: "localhost",
    //   signed: true,
    //   path: "/",
    // });

    // Success (User exists and password is correct)
    return res
      .status(200)
      .json({ message: "success", token, id: existingUser._id.toString() });
  } catch (error) {
    return res.status(400).json({ message: "ERROR", error });
  }
};
