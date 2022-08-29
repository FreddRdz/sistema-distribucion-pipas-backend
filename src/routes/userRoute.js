import { Router } from 'express';
import { userController } from '../controllers/userController.js';
import { checkAuth } from '../middlewares/auth.js';
import { checkRoleAuth } from '../middlewares/roleAuth.js';

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
  checkRoleAuth(['admin']),
  userController.delete
);

// UPDATE - http://localhost:5050/api/v1/users/:id
userRouter.put(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin']),
  userController.update
);
