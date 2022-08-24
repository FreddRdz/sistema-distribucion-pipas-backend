import { userService } from '../services/userService.js';

export const authController = {
  signIn: async (req, res) => {
    const data = { ...req.body };
    await userService.createUser(data);

    res.status(201).json({ status: 201, message: 'Usuario creado!' });
  },

  logIn: async (req, res) => {
    res.status(200).json({ status: 200, message: 'Bienvenido!' });
  },
};
