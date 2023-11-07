import express from 'express';
import validateRequest from '../../middlewares/validationRequest';
import { taskZodValidation } from './task.validation';
import { taskController } from './task.controller';

const router = express.Router();

// delete task
router.delete('/:id', taskController.deleteTask);

// update task
router.patch('/update-task/:id', taskController.updateTask);

// get a single task
router.get('/:id', taskController.getASingleTask);

// get all task
router.get('/', taskController.getAllTask);

// create task
router.post(
  '/create-task',
  validateRequest(taskZodValidation.taskZodSchema),
  taskController.createTask,
);

export const taskRoute = router;
