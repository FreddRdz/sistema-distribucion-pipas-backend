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
  checkRoleAuth(['user', 'admin']),
  cityController.getAll
);

// GET - http://localhost:5050/api/v1/cities/:id
cityRouter.get(
  '/:id',
  checkAuth,
  checkRoleAuth(['user', 'admin']),
  cityController.getOne
);

// POST - http://localhost:5050/api/v1/cities
cityRouter.post(
  '/',
  checkAuth,
  checkRoleAuth(['user', 'admin']),
  validateCreateCity,

  cityController.createOne
);

// DELETE - http://localhost:5050/api/v1/cities/:id
cityRouter.delete(
  '/:id',
  checkAuth,
  checkRoleAuth(['user', 'admin']),
  cityController.delete
);

// UPDATE - http://localhost:5050/api/v1/cities/:id
cityRouter.put(
  '/:id',
  checkAuth,
  checkRoleAuth(['user', 'admin']),
  validateUpdateCity,
  cityController.update
);

// UPDATE PIPE - http://localhost:5050/api/v1/cities/add/:id/:pipe
cityRouter.put('/add/pipe/:id/:pipe', cityController.addPipe);

// DELETE PIPE - http://localhost:5050/api/v1/cities/delete/:id/:pipe
cityRouter.delete(
  '/delete/pipe/:id/:pipe',
  checkAuth,
  checkRoleAuth(['user', 'admin']),
  cityController.deletePipe
);
