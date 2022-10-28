import { encrypt } from '../helpers/cryptHandler.js';

export const passwordToCrypt = async (req, res, next) => {
  req.body.password = await encrypt(req.body.password);
  next();
};

export const newPasswordToCrypt = async (req, res, next) => {
  req.body.newPassword = await encrypt(req.body.newPassword);
  next();
};
