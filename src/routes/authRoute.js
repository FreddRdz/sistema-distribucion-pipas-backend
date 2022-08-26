import { Router } from 'express';
import { authController } from '../controllers/authController.js';
import { checkUserRepeated } from '../middlewares/signCheck.js';
import { passwordToCrypt } from '../middlewares/encryptPassword.js';
import {
  validateCreate,
  validateLogin,
} from '../validations/validationsAuth.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateCreate,
  checkUserRepeated,
  passwordToCrypt,
  authController.signIn
);

authRouter.post('/login', validateLogin, authController.logIn);
