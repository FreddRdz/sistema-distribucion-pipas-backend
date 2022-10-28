import { Router } from 'express';
import { authController } from '../controllers/authController.js';
import { checkUserRepeated } from '../middlewares/signCheck.js';
import { passwordToCrypt } from '../middlewares/encryptPassword.js';
import {
  validateCreate,
  validateLogin,
  confirmPassword,
  validateToken,
} from '../validations/validationsAuth.js';
import { checkToken } from '../middlewares/retrieveData.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateCreate,
  confirmPassword,
  checkUserRepeated,
  passwordToCrypt,
  authController.signIn
);

authRouter.post('/validate', checkToken);

authRouter.post('/login', validateLogin, authController.logIn);
