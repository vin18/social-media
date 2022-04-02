import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import 'express-async-errors';
import cookieParser from 'cookie-parser';
import connectDb from './config/connectDb.js';
import { errorHandler } from './middlewares/errorHandler.js';

import authRoutes from './routes/authRoute.js';

dotenv.config();
const app = express();

connectDb();
app.use(express.json());
app.use(cookieParser());

app.use(`/auth`, authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
