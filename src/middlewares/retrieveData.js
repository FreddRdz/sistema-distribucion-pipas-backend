import { verifyToken } from '../helpers/generateToken.js';

export const checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();

    const tokenData = await verifyToken(token);

    if (tokenData === null) {
      res.status(409).json({ status: 409 });
    } else {
      res.status(200).json(tokenData);
    }
  } catch (error) {
    res.status(409).json({
      status: 409,
      message: 'Token expirado o no tienes autorización en esta ruta',
    });
  }
};
