import { Router } from 'express';
import { pipeController } from '../controllers/pipeController.js';
import { checkAuth } from '../middlewares/auth.js';
import { checkRoleAuth } from '../middlewares/roleAuth.js';
import {
  validateCreatePipe,
  validateUpdatePipe,
} from '../validations/validationsPipe.js';

export const pipeRouter = Router();

// GET - http://localhost:5050/api/v1/pipes
pipeRouter.get('/', checkRoleAuth(['user', 'admin']), pipeController.getAll);

// GET - http://localhost:5050/api/v1/pipes/:id
pipeRouter.get('/:id', checkRoleAuth(['user', 'admin']), pipeController.getOne);

// POST - http://localhost:5050/api/v1/pipes
pipeRouter.post(
  '/',
  checkRoleAuth(['user', 'admin']),
  validateCreatePipe,
  pipeController.createOne
);

// DELETE - http://localhost:5050/api/v1/pipes/:id
pipeRouter.delete(
  '/:id',
  checkRoleAuth(['user', 'admin']),
  pipeController.delete
);

// UPDATE - http://localhost:5050/api/v1/pipes/:id
pipeRouter.put(
  '/:id',
  checkRoleAuth(['user', 'admin']),
  validateUpdatePipe,
  pipeController.update
);
