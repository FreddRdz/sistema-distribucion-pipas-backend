import { userService } from '../services/userService.js';

export const userController = {
  getAll: async (req, res) => {
    // Llamamos al servicio para encontrar todos los usuarios
    const allUsers = await userService.getAllUsers();

    // Si no hay usuarios, le mandaremos un mensaje que no se encontró la información
    !allUsers ??
      res.status(404).json({ status: 404, message: 'Usuario no encontrado' });

    res
      .status(200)
      .json({ status: 200, total: allUsers.length, data: allUsers });
  },

  getOne: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Llamamos al servicio para encontrar el usuario
    const user = await userService.getOneUser(id);

    // Si el usuario no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    !user ??
      res.status(404).json({ status: 404, message: 'Usuario no encontrado' });

    res.status(200).json({ status: 200, data: user });
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
    const findUser = await userService.getOneUser(id);

    // Si el usuario no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    !findUser ??
      res.status(404).json({ status: 404, message: 'Usuario no encontrado' });

    const userDeleted = await userService.deleteUser(id);
    res.status(200).json({ status: 200, isDeleted: true, data: userDeleted });
  },

  update: async (req, res) => {
    // Capturamos el valor del id de la ruta
    const { id } = req.params;

    // Llamamos al servicio para encontrar el usuario
    const oldDataUser = await userService.getOneUser(id);

    // Si el usuario no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    !oldDataUser ??
      res.status(404).json({ status: 404, message: 'Usuario no encontrado' });

    // En caso que la información de lo que se cambie sea nueva, pisará la información vieja
    const userData = { ...oldDataUser, ...req.body };
    const userUpdated = await userService.updateUser(id, userData);
    res.status(200).json({ status: 200, isUpdated: true, data: userUpdated });
  },
};
