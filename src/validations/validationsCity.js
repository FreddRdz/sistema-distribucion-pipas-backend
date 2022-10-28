import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

export const validateCreateCity = [
  check('name')
    .exists()
    .trim()
    .isString()
    .isLength({ min: 2, max: 255 })
    .not()
    .isEmpty(),
  (req, res, next) => validateResult(req, res, next),
];

export const validateUpdateCity = [
  check('name')
    .exists()
    .trim()
    .isString()
    .isLength({ min: 2, max: 255 })
    .not()
    .isEmpty(),
];
