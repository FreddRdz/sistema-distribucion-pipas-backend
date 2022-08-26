import { userService } from '../services/userService.js';
import { compare } from '../helpers/cryptHandler.js';

export const authController = {
  signIn: async (req, res) => {
    const data = { ...req.body };

    await userService.createUser(data);

    res.status(201).json({ status: 201, message: 'Usuario creado!' });
  },

  logIn: async (req, res) => {
    const { password, email } = req.body;

    // Llamamos nuestro servicio para buscar un usuario por correo
    const user = await userService.getUserByEmail(email);

    // Si el usuario no se encuentra en la base de datos, mandamos un mensaje sobre esta información
    if (user === null) {
      res.status(403).json({ status: 403, message: 'Usuario no encontrado' });
    } else {
      const validatePassword = await compare(password, user.password);

      !validatePassword
        ? res
            .status(403)
            .json({ status: 403, message: 'Contraseña incorrecta!' })
        : res.status(200).json({ status: 200, message: 'Bienvenido!' });
    }
  },
};
