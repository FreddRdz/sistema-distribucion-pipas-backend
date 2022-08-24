import { Router } from 'express';
import { authController } from '../controllers/authController.js';

export const authRouter = Router();

authRouter.post('/register', authController.signIn);

authRouter.post('/login', authController.logIn);
