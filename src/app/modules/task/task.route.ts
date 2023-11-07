import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { taskZodValidation } from './task.validation';
import { taskController } from './task.controller';

const router = express.Router();

// create task
router.post(
  '/create-task',
  validateRequest(taskZodValidation.taskZodSchema),
  taskController.createTask,
);

export const taskRoute = router;
