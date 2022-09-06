import { Router } from 'express';
import { pipeController } from '../controllers/pipeController.js';

export const pipeRouter = Router();

// GET - http://localhost:5050/api/v1/pipes
pipeRouter.get('/', pipeController.getAll);

// GET - http://localhost:5050/api/v1/pipes/:id
pipeRouter.get('/:id', pipeController.getOne);

// POST - http://localhost:5050/api/v1/pipes
pipeRouter.post('/', pipeController.createOne);

// DELETE - http://localhost:5050/api/v1/pipes/:id
pipeRouter.delete('/:id', pipeController.delete);

// UPDATE - http://localhost:5050/api/v1/pipes/:id
pipeRouter.put('/:id', pipeController.update);
