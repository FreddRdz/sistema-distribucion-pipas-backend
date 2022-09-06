import { updateInfo } from '../helpers/updateUserData.js';
import { pipeService } from '../services/pipeService.js';

export const pipeController = {
  getAll: async () => {
    const allPipes = await pipeService.getAllPipes();

    !allPipes ??
      res
        .status(404)
        .json({ status: 404, message: 'No hay pipas en la base de datos!' });

    res
      .status(200)
      .json({ status: 200, total: allPipes.length, data: allPipes });
  },

  getOne: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Llamamos al servicio para encontrar la pipa
    const pipe = await pipeService.getPipe(id);

    // Si la pipa no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    pipe === null
      ? res.status(404).json({ status: 404, message: 'Pipa no encontrada!' })
      : res.status(200).json({ status: 200, data: pipe });
  },

  createOne: async (req, res) => {
    const pipeData = { ...req.body };
    const newPipe = await pipeService.createPipe(pipeData);
    res.status(201).json({ status: 201, data: newPipe });
  },

  delete: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Llamamos al servicio para encontrar la pipa
    const pipe = await pipeService.getPipe(id);

    // Si la pipa no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    if (pipe === null) {
      res.status(404).json({ status: 404, message: 'Pipa no encontrada!' });
    } else {
      const pipeDeleted = await pipeService.deletePipe(id);
      res.status(200).json({ status: 200, isDeleted: true, data: pipeDeleted });
    }
  },

  update: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Hacemos un spread de los valores que vengan en la url
    const newDataPipe = { ...req.body };

    // Llamamos al servicio para encontrar el usuario
    const oldDataPipe = await pipeService.getPipe(id);

    // Si la ciudad no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    if (oldDataPipe === null) {
      res.status(404).json({ status: 404, message: 'Pipa no encontrada!' });
    } else {
      // Creamos una variable donde guardamos los cambios que se hicieron llamando una función para ver qué se modificó
      const pipeData = updateInfo(newDataPipe, oldDataPipe);

      // Utilizamos el servicio para actualizar los datos de la ciudad pasandole el id de la pipa y la información nueva
      const pipeUpdated = await pipeService.updatePipe(id, pipeData);

      res.status(200).json({ status: 200, isUpdated: true, data: pipeUpdated });
    }
  },
};
