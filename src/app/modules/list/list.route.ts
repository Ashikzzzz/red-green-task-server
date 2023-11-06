import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { listZodValidation } from './list.validation';
import { listController } from './list.controller';

const router = express.Router();
// delete a list
router.delete('/:id', listController.deleteList);

// update a list
router.patch('/update-list/:id', listController.updateList);

// get a single list
router.get('/:id', listController.getASingleList);

// get all list
router.get('/', listController.getAllList);

// create list
router.post(
  '/create-list',
  validateRequest(listZodValidation.listZodSchema),
  listController.createUser,
);

export const listRoute = router;
