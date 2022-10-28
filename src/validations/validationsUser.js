import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

export const validateCreateUser = [
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
  (req, res, next) => validateResult(req, res, next),
];
