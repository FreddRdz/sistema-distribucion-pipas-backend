import { Router } from 'express';
import { authController } from '../controllers/authController.js';
import { checkUserRepeated } from '../middlewares/signCheck.js';
import { passwordToCrypt } from '../middlewares/encryptPassword.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  checkUserRepeated,
  passwordToCrypt,
  authController.signIn
);

authRouter.post('/login', authController.logIn);
