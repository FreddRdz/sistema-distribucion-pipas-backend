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

  createOne: (req, res) => {
    res.status(201).json('Creamos un usuario');
  },

  delete: (req, res) => {
    res.status(200).json('Borramos un usuario');
  },

  update: (req, res) => {
    res.status(200).json('Actualizamos un usuario');
  },
};
