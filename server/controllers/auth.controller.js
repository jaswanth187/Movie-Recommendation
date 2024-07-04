import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.status(201).json({ message: "User created!" });
  } catch (error) {
    next(error);
    // next(errorHandler(300, error.message));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const isValidPassword = await bcrypt.compare(password, validUser.password);
    if (!isValidPassword) {
      return next(errorHandler(401, "Invalid password"));
    }
    const token = jwt.sign({ id: validUser._id }, "secretkey");
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);

    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: expiryDate,
        sameSite: "Lax", // Set SameSite to None for cross-site cookies
        secure: false, // Ensure secure is false for local development
      })
      .status(200)
      .json({ rest });
  } catch (error) {
    next(error);
  }
};

export const googleOAuth = async (req, res, next) => {
  const { name, email, photo } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, "secretkey");
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000);
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expiryDate,
          sameSite: "Lax",
          secure: false,
        })
        .status(200)
        .json({ rest });
      return;
    }
    const hashedPassword = await bcrypt.hash(email, 10);
    const newUser = new User({
      username: name,
      email,
      password: hashedPassword,
      profilePicture: photo,
    });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, "secretkey");
    const { password, ...rest } = newUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: expiryDate,
        sameSite: "Lax",
        secure: false,
      })
      .status(200)
      .json({ rest });
  } catch (error) {
    next(error);
  }
};
