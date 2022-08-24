import { encrypt } from '../helpers/cryptHandler.js';

export const passwordToCrypt = async (req, res, next) => {
  req.body.password = await encrypt(req.body.password);
  next();
};
