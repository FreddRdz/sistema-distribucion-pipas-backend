import { userService } from '../services/userService.js';

export const userController = {
  getAll: async (req, res) => {
    const allUsers = await userService.getAllUsers();
    res
      .status(200)
      .json({ status: 200, total: allUsers.length, data: allUsers });
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getOneUser(id);
    res.status(200).json({ status: 200, data: user });
  },

  createOne: async (req, res) => {
    const userData = { ...req.body };
    const newUser = await userService.createUser(userData);
    res.status(201).json({ status: 201, data: newUser });
  },

  delete: async (req, res) => {
    const { id } = req.params;

    const findUser = await userService.getOneUser(id);

    !findUser ??
      res.status(404).json({ status: 404, message: 'Usuario no encontrado' });

    const userDeleted = await userService.deleteUser(id);
    res.status(200).json({ status: 200, isDeleted: true, data: userDeleted });
  },

  update: async (req, res) => {
    const { id } = req.params;

    const oldDataUser = await userService.getOneUser(id);

    !oldDataUser ??
      res.status(404).json({ status: 404, message: 'Usuario no encontrado' });

    const userData = { ...oldDataUser, ...req.body };
    const userUpdated = await userService.updateUser(id, userData);
    res.status(200).json({ status: 200, isUpdated: true, data: userUpdated });
  },
};
