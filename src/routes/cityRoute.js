import { Router } from 'express';
import { cityController } from '../controllers/cityController.js';
import { checkAuth } from '../middlewares/auth.js';
import { checkRoleAuth } from '../middlewares/roleAuth.js';
import {
  validateCreateCity,
  validateUpdateCity,
} from '../validations/validationsCity.js';

export const cityRouter = Router();

// GET - http://localhost:5050/api/v1/cities
cityRouter.get(
  '/',
  checkAuth,
  checkRoleAuth(['admin, user']),
  cityController.getAll
);

// GET - http://localhost:5050/api/v1/cities/:id
cityRouter.get(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin, user']),
  cityController.getOne
);

// POST - http://localhost:5050/api/v1/cities
cityRouter.post(
  '/',
  checkAuth,
  checkRoleAuth(['admin']),
  validateCreateCity,
  cityController.createOne
);

// DELETE - http://localhost:5050/api/v1/cities/:id
cityRouter.delete(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin']),
  cityController.delete
);

// UPDATE - http://localhost:5050/api/v1/cities/:id
cityRouter.put(
  '/:id',
  checkAuth,
  checkRoleAuth(['admin']),
  validateUpdateCity,
  cityController.update
);

// UPDATE PIPE - http://localhost:5050/api/v1/cities/add/:id/:pipe
cityRouter.put(
  '/add/pipe/:id/:pipe',
  checkAuth,
  checkRoleAuth(['admin']),
  cityController.addPipe
);

// DELETE PIPE - http://localhost:5050/api/v1/cities/delete/:id/:pipe
cityRouter.delete(
  '/delete/pipe/:id/:pipe',
  checkAuth,
  checkRoleAuth(['admin']),
  cityController.deletePipe
);
