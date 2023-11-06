import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { listZodValidation } from './list.validation';
import { listController } from './list.controller';

const router = express.Router();

// create list
router.post(
  '/create-list',
  validateRequest(listZodValidation.listZodSchema),
  listController.createUser,
);

export const listRoute = router;
