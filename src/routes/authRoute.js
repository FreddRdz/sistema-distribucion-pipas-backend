import { Router } from 'express';
import { authController } from '../controllers/authController.js';
import { checkUserRepeated } from '../middlewares/signCheck.js';

export const authRouter = Router();

authRouter.post('/register', checkUserRepeated, authController.signIn);

authRouter.post('/login', authController.logIn);
