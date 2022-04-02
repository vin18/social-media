import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import { sendResponse } from '../utils/sendResponse.js';

// @desc    Signup user
// @route   POST /auth/signup
// @access  Public
const signup = async (req, res) => {
  try {
    const { email, password, firstName, lastName, username } = req.body;

    if (!email || !password || !firstName || !lastName || !username) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: `Please enter all the values`,
      });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: `User with this email already exists`,
      });
    }

    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      username,
    });

    sendResponse(user, res, StatusCodes.CREATED);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error,
    });
  }
};

// @desc    Signin user
// @route   POST /auth/signin
// @access  Public
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: `Please enter email and password`,
      });
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: `Invalid credentials`,
      });
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: `Invalid credentials`,
      });
    }

    sendResponse(user, res, StatusCodes.OK);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error,
    });
  }
};

export { signup, signin };
