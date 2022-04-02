import User from '../models/userModel.js';
import { StatusCodes } from 'http-status-codes';

// @desc    Register user
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

    res.status(StatusCodes.OK).json({
      user,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error,
    });
  }
};

export { signup };
