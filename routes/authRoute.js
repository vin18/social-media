import express from 'express';
import { signup, signin, logout } from '../controllers/authController.js';
import { protect } from '../middlewares/authorization.js';
const router = express.Router();

router.post(`/signup`, signup);
router.post(`/signin`, signin);
router.get(`/logout`, protect, logout);

export default router;
