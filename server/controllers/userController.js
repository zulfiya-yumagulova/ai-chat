import { User } from "../models/User.js";
export const getAllUsers = async (req, res, next) => {
  // GET all users
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
