import { authService } from '../services/authService.js';

export const checkUserRepeated = async (req, res, next) => {
  const { email } = req.body;
  const emailRepeated = await authService.checkEmail(email);

  emailRepeated
    ? res.status(403).json({ status: 403, message: 'Email en uso!' })
    : next();
};
