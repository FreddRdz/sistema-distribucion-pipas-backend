import { validationResult } from 'express-validator';

export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (error) {
    res.status(403).json({ status: 403, errors: error });
  }
};
