import { StatusCodes } from 'http-status-codes';

const errorHandler = (err, req, res, next) => {
  const error = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || `Something went wrong, try again later`,
  };

  return res.status(error.statusCode).json({
    error: error.message,
  });
};

export { errorHandler };
