import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import { sendResponse } from '../utils/sendResponse.js';
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js';

/**
 * @desc    Signup user
 * @route   POST /auth/signup
 * @access  Public
 */
const signup = async (req, res) => {
  const { email, password, firstName, lastName, username } = req.body;

  if (!email || !password || !firstName || !lastName || !username) {
    throw new BadRequestError(`Please enter all the values`);
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw new BadRequestError(`User with this email already exists`);
  }

  const user = await User.create({
    email,
    password,
    firstName,
    lastName,
    username,
  });

  sendResponse(user, res, StatusCodes.CREATED);
};

/**
 * @desc    Signin user
 * @route   POST /auth/signin
 * @access  Public
 */
const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError(`Please enter email and password`);
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError(`Invalid credentials`);
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError(`Invalid credentials`);
  }

  sendResponse(user, res, StatusCodes.OK);
};

/**
 * @desc    Logout user
 * @route   GET /auth/logout
 * @access  Private
 */
const logout = (req, res) => {
  res.cookie('token', null, {
    httpOnly: true,
    expirs: new Date(Date.now() + 1000),
  });

  res.status(StatusCodes.OK).json({
    user: null,
    message: `User logged out`,
  });
};

export { signup, signin, logout };
