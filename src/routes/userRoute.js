import { Router } from 'express';
import { userController } from '../controllers/userController.js';
import { checkAuth } from '../middlewares/auth.js';
import { checkRoleAuth } from '../middlewares/roleAuth.js';
import {
  passwordToCrypt,
  newPasswordToCrypt,
} from '../middlewares/encryptPassword.js';
import { checkOldPassword } from '../middlewares/compareOldPassword.js';

export const userRouter = Router();

// GET - http://localhost:5050/api/v1/users
userRouter.get('/', checkAuth, checkRoleAuth(['admin']), userController.getAll);

// GET - http://localhost:5050/api/v1/users/:id
userRouter.get(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin']),
  userController.getOne
);

// POST - http://localhost:5050/api/v1/users
userRouter.post(
  '/',
  checkAuth,
  checkRoleAuth(['admin']),
  userController.createOne
);

// DELETE - http://localhost:5050/api/v1/users/:id
userRouter.delete(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin', 'user']),
  userController.delete
);

// UPDATE - http://localhost:5050/api/v1/users/:id
userRouter.put(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin']),
  passwordToCrypt,
  userController.update
);

// UPDATE PASSWORD - http://localhost:5050/api/v1/users/update/password/:id
userRouter.put(
  '/update/password/:id',
  checkAuth,
  checkRoleAuth(['user']),
  checkOldPassword,
  newPasswordToCrypt,
  userController.update
);
