import { cityService } from '../services/cityService.js';
import { updateInfo } from '../helpers/updateUserData.js';

export const cityController = {
  getAll: async (req, res) => {
    const allCities = await cityService.getAllCities();

    !allCities ??
      res
        .status(404)
        .json({ status: 404, message: 'No hay ciudades en la base de datos!' });

    res
      .status(200)
      .json({ status: 200, total: allCities.length, data: allCities });
  },

  getOne: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Llamamos al servicio para encontrar la ciudad
    const city = await cityService.getCity(id);

    // Si la ciudad no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    city === null
      ? res.status(404).json({ status: 404, message: 'Ciudad no encontrada!' })
      : res.status(200).json({ status: 200, data: city });
  },

  createOne: async (req, res) => {
    const cityData = { ...req.body };
    const newCity = await cityService.createCity(cityData);
    res.status(201).json({ status: 201, data: newCity });
  },

  delete: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Llamamos al servicio para encontrar la ciudad
    const city = await cityService.deleteCity(id);

    // Si la ciudad no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    if (city === null) {
      res.status(404).json({ status: 404, message: 'Ciudad no encontrada!' });
    } else {
      const cityDeleted = await cityService.deleteCity(id);
      res.status(200).json({ status: 200, isDeleted: true, data: cityDeleted });
    }
  },

  update: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Hacemos un spread de los valores que vengan en la url
    const newDataCity = { ...req.body };

    // Llamamos al servicio para encontrar el usuario
    const oldDataCity = await cityService.getCity(id);

    // Si la ciudad no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    if (oldDataCity === null) {
      res.status(404).json({ status: 404, message: 'Ciudad no encontrada!' });
    } else {
      // Creamos una variable donde guardamos los cambios que se hicieron llamando una función para ver qué se modificó
      const cityData = updateInfo(newDataCity, oldDataCity);

      // Utilizamos el servicio para actualizar los datos de la ciudad pasandole el id de la ciudad y la información nueva
      const cityUpdated = await cityService.updateCity(id, cityData);

      res.status(200).json({ status: 200, isUpdated: true, data: cityUpdated });
    }
  },

  addPipe: async (req, res) => {
    const { id, pipe } = req.params;

    const cityUpdated = await cityService.addPipeToCity(id, pipe);

    res.status(200).json({
      status: 200,
      message: 'Pipa añadida a la ciudad!',
      data: cityUpdated,
    });
  },

  deletePipe: async (req, res) => {
    const { id, pipe } = req.params;

    const cityUpdated = await cityService.deletePipeFromCity(id, pipe);

    res.status(200).json({
      status: 200,
      message: 'Pipa eliminada a la ciudad!',
      data: cityUpdated,
    });
  },
};
