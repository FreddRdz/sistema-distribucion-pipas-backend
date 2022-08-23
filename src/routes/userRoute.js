import { Router } from 'express';
import { userController } from '../controllers/userController.js';

export const userRouter = Router();

// GET - http://localhost:5050/api/v1/users
userRouter.get('/', userController.getAll);

// GET - http://localhost:5050/api/v1/:id
userRouter.get('/:id', userController.getOne);

// POST - http://localhost:5050/api/v1/
userRouter.post('/', userController.createOne);

// DELETE - http://localhost:5050/api/v1/:id
userRouter.delete('/:id', userController.delete);

// UPDATE - http://localhost:5050/api/v1/:id
userRouter.put('/:id', userController.update);
