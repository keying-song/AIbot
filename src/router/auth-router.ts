import { Router } from 'express';
import * as authController from '../controller/auth-controller';
import { body } from 'express-validator';

const router = Router();

router.put(
  '/signup',
  [ body('name')
    .trim().isLength({ min: 1 }).withMessage('invalid name'),

    body('email')
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),

  body('password')
    .trim()
    .isLength({ min: 5 })
    .withMessage('invalid password. at least 5 characters'),    
  ],
  authController.signupController
);

router.post(
  '/login',
  [
    body('email')
      .trim()
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail(),

    body('password')
      .trim()
      .isLength({ min: 5 })
      .withMessage('Too small password'),
  ],
  authController.loginController
);

export default router;
