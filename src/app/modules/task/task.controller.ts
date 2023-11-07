import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { taskService } from './task.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';

// create Task
const createTask = catchAsync(async (req: Request, res: Response) => {
  const listData = req.body;

  const result = await taskService.createTask(listData);
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task created Successful',
    data: result,
  });
});

export const taskController = {
  createTask,
};
