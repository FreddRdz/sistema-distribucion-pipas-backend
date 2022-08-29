import { verifyToken } from '../helpers/generateToken.js';

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();

    const tokenData = await verifyToken(token);

    tokenData._id
      ? next()
      : res.status(409).json({
          status: 409,
          message: 'Token expirado o no tienes autorización en esta ruta',
        });
  } catch (error) {
    console.log(error);
    res.status(409).json({
      status: 409,
      message: 'Token expirado o no tienes autorización en esta ruta',
    });
  }
};
