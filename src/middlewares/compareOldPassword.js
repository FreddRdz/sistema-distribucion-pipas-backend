import { compare } from '../helpers/cryptHandler.js';
import { verifyToken } from '../helpers/generateToken.js';
import { userService } from '../services/userService.js';

export const checkOldPassword = async (req, res, next) => {
  const { password } = req.body;

  try {
    // Agarramos el token de los headers
    const token = req.headers.authorization.split(' ').pop();

    console.log(token);

    token === undefined ??
      res
        .status(404)
        .json({ status: 404, message: 'Token no encontrado o no generado!' });

    // Verificamos el token que agarramos del header
    const tokenData = await verifyToken(token);

    //Busca el usuario por el payload que llamemos
    const userData = await userService.getUserById(tokenData._id);

    // Si el usuario no se encuentra en la base de datos, le mandaremos un mensaje que no se encontró
    userData === null ??
      res.status(404).json({ status: 404, message: 'Usuario no encontrado!' });

    const samePassword = await compare(password, userData.password);

    // Si las contraseñas coinciden, seguimos en la ruta, si no, mandamos un mensaje que no se puede seguir avanzando
    samePassword
      ? next()
      : res
          .status(409)
          .json({ status: 409, message: 'Tu contraseña no coincide!' });
  } catch (error) {
    res.status(409).json({ status: 409, message: 'Ocurrió un error!' });
  }
};
