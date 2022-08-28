import { Router } from 'express';
import { authController } from '../controllers/authController.js';
import { checkUserRepeated } from '../middlewares/signCheck.js';
import { passwordToCrypt } from '../middlewares/encryptPassword.js';
import {
  validateCreate,
  validateLogin,
  confirmPassword,
} from '../validations/validationsAuth.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateCreate,
  confirmPassword,
  checkUserRepeated,
  passwordToCrypt,
  authController.signIn
);

authRouter.post('/login', validateLogin, authController.logIn);
