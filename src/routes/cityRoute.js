import { Router } from 'express';
import { cityController } from '../controllers/cityController.js';

export const cityRouter = Router();

// GET - http://localhost:5050/api/v1/cities
cityRouter.get('/', cityController.getAll);

// GET - http://localhost:5050/api/v1/cities/:id
cityRouter.get('/:id', cityController.getOne);

// POST - http://localhost:5050/api/v1/cities
cityRouter.post('/', cityController.createOne);

// DELETE - http://localhost:5050/api/v1/cities/:id
cityRouter.delete('/:id', cityController.delete);

// UPDATE - http://localhost:5050/api/v1/cities/:id
cityRouter.put('/:id', cityController.update);

// UPDATE PIPE - http://localhost:5050/api/v1/cities/add/pipe/:id
cityRouter.put('/add/pipe/:id/:pipe', cityController.addPipe);

// DELETE PIPE - http://localhost:5050/api/v1/cities/delete/pipe/:id
cityRouter.delete('/delete/pipe/:id/:pipe', cityController.deletePipe);
