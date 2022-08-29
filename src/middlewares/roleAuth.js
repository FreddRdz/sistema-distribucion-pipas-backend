import { verifyToken } from '../helpers/generateToken.js';
import { userService } from '../services/userService.js';

export const checkRoleAuth = (roles) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();
    const tokenData = await verifyToken(token);
    const userData = await userService.getUserById(tokenData._id);

    [].concat(roles).includes(userData.role)
      ? next()
      : res.status(409).json({ status: 409, message: 'No tienes permisos!' });
  } catch (error) {
    res.status(409).json({ status: 409, message: 'No tienes permisos!' });
  }
};
