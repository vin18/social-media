import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import UnAuthenticatedError from '../errors/unauthenticated.js';
import User from '../models/userModel.js';

const protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new UnAuthenticatedError(
      `You don't have premission to access this resource`
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.userId);
  if (!user) {
    throw new UnAuthenticatedError(`User no longer exists`);
  }

  req.user = user;
  next();
};

export { protect };
