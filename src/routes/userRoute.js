import { Router } from 'express';
import { userController } from '../controllers/userController.js';
import { checkAuth } from '../middlewares/auth.js';

export const userRouter = Router();

// GET - http://localhost:5050/api/v1/users
userRouter.get('/', checkAuth, userController.getAll);

// GET - http://localhost:5050/api/v1/users/:id
userRouter.get('/:id', userController.getOne);

// POST - http://localhost:5050/api/v1/users
userRouter.post('/', userController.createOne);

// DELETE - http://localhost:5050/api/v1/users/:id
userRouter.delete('/:id', userController.delete);

// UPDATE - http://localhost:5050/api/v1/users/:id
userRouter.put('/:id', userController.update);
