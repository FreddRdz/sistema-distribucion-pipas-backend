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
pipeRouter.get(
  '/',
  checkAuth,
  checkRoleAuth(['admin, user']),
  pipeController.getAll
);

// GET - http://localhost:5050/api/v1/pipes/:id
pipeRouter.get(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin, user']),
  pipeController.getOne
);

// POST - http://localhost:5050/api/v1/pipes
pipeRouter.post(
  '/',
  checkAuth,
  checkRoleAuth(['admin']),
  validateCreatePipe,
  pipeController.createOne
);

// DELETE - http://localhost:5050/api/v1/pipes/:id
pipeRouter.delete(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin']),
  pipeController.delete
);

// UPDATE - http://localhost:5050/api/v1/pipes/:id
pipeRouter.put(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin']),
  validateUpdatePipe,
  pipeController.update
);
