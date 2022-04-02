import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: `You don't have premission to access this resource`,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        error: `User no longer exists`,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error,
    });
  }
};

export { protect };
