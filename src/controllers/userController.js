import { userService } from '../services/userService.js';
import { updateInfo } from '../helpers/updateUserData.js';

export const userController = {
  getAll: async (req, res) => {
    // Llamamos al servicio para encontrar todos los usuarios
    const allUsers = await userService.getAllUsers();

    // Si no hay usuarios, le mandaremos un mensaje que no se encontró la información
    !allUsers ??
      res.status(404).json({ status: 404, message: 'Usuario no encontrado!' });

    res
      .status(200)
      .json({ status: 200, total: allUsers.length, data: allUsers });
  },

  getOne: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Llamamos al servicio para encontrar el usuario
    const user = await userService.getUserById(id);

    // Si el usuario no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    user === null
      ? res.status(404).json({ status: 404, message: 'Usuario no encontrado!' })
      : res.status(200).json({ status: 200, data: user });
  },

  createOne: async (req, res) => {
    const userData = { ...req.body };
    const newUser = await userService.createUser(userData);
    res.status(201).json({ status: 201, data: newUser });
  },

  delete: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Llamamos al servicio para encontrar el usuario
    const user = await userService.getUserById(id);

    // Si el usuario no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    if (user === null) {
      res.status(404).json({ status: 404, message: 'Usuario no encontrado!' });
    } else {
      const userDeleted = await userService.deleteUser(id);
      res.status(200).json({ status: 200, isDeleted: true, data: userDeleted });
    }
  },

  update: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;
    const { newDataUser } = { ...req.body };

    // Llamamos al servicio para encontrar el usuario
    const oldDataUser = await userService.getUserById(id);

    // Si el usuario no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    if (oldDataUser === null) {
      res.status(404).json({ status: 404, message: 'Usuario no encontrado!' });
    } else {
      // Capturamos los datos
      const userData = updateInfo(oldDataUser, newDataUser);

      const userUpdated = await userService.updateUser(id, userData);

      res.status(200).json({ status: 200, isUpdated: true, data: userUpdated });
    }
  },
};
