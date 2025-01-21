import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/Users.models";

//register
export const userRegister = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Validate if all required fields are provided
    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fileds are required!",
      });
    }

    // Check if a user already exists with the provided email
    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    //hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    //create a new user with hash password
    const newUser = await UserModel.create({
      userName,
      email,
      password: hashPassword,
    });

    //save the new user to the database
    await newUser.save();

    // Respond with a success message
    return res.status(200).json({
      success: true,
      message: "Successfully Registered!!!",
    });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred during registration.",
    });
  }
};

//login
export const userLogin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error in user login:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred during login.",
    });
  }
};
