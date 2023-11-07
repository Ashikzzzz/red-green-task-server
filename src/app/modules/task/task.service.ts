import { ITask } from './task.interface';
import { Task } from './task.model';

// create a task
const createTask = async (payload: ITask) => {
  const result = await Task.create(payload);
  return result;
};

export const taskService = {
  createTask,
};
