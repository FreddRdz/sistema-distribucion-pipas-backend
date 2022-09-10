import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

export const validateCreatePipe = [
  check('placas')
    .exists()
    .trim()
    .toUpperCase()
    .isString()
    .isLength({ min: 2, max: 7 })
    .not()
    .isEmpty(),
  check('capacity').exists().trim().isNumeric().not().isEmpty(),
  (req, res, next) => validateResult(req, res, next),
];

export const validateUpdatePipe = [
  check('placas')
    .exists()
    .trim()
    .toUpperCase()
    .isString()
    .isLength({ min: 2, max: 7 })
    .not()
    .isEmpty(),
  check('capacity').exists().trim().isNumeric().not().isEmpty(),
  (req, res, next) => validateResult(req, res, next),
];
