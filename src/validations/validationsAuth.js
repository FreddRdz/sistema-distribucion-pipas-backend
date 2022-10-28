import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

export const validateCreate = [
  check('firstName')
    .exists()
    .trim()
    .isLength({ min: 2, max: 70 })
    .not()
    .isEmpty(),
  check('lastName')
    .exists()
    .trim()
    .isLength({ min: 2, max: 70 })
    .not()
    .isEmpty(),
  check('email')
    .exists()
    .trim()
    .isLength({ min: 2, max: 100 })
    .isEmail()
    .toLowerCase()
    .not()
    .isEmpty(),
  check('password')
    .exists()
    .trim()
    .isLength({ min: 6, max: 100 })
    .not()
    .isEmpty(),
  check('repeatPassword')
    .exists()
    .trim()
    .isLength({ min: 6, max: 100 })
    .not()
    .isEmpty(),
  (req, res, next) => validateResult(req, res, next),
];

export const validateLogin = [
  check('email')
    .exists()
    .trim()
    .toLowerCase()
    .isLength({ min: 2, max: 100 })
    .isEmail()
    .not()
    .isEmpty(),
  check('password')
    .exists()
    .trim()
    .isLength({ min: 6, max: 100 })
    .not()
    .isEmpty(),
  (req, res, next) => validateResult(req, res, next),
];

export const validateToken = [
  check('token').exists().trim().isString().not().isEmpty(),
  (req, res, next) => validateResult(req, res, next),
];

// Función que valide que las contraseñas sean las mismas que digite cuando llene el registro
export const confirmPassword = (req, res, next) => {
  const { password, repeatPassword } = req.body;

  // Validación que si las contraseñas no coinciden, mande un error y si sí, pasa la validación
  if (password === repeatPassword) {
    next();
  } else {
    res.status(403).json({ status: 403, message: 'Contraseña no coincide!' });
  }
};
