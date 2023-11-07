import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { taskService } from './task.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { ITask } from './task.interface';

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

// get all task
const getAllTask = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'title', 'status']);
  const paginationOption = pick(req.query, [
    'limit',
    'page',
    'sortBy',
    'sortOrder',
  ]);

  const result = await taskService.getAllTask(filters, paginationOption);

  responseForData.sendResponse<ITask[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successful',
    data: result.data,
    meta: result.meta,
  });
  // next();
});

// get single task
const getASingleTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await taskService.getASingleTask(id);

  responseForData.sendResponseForCreate<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successful',
    data: result,
  });
});

// update task
const updateTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await taskService.updateTask(id, updateData);

  responseForData.sendResponseForCreate<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Update Successful',
    data: result,
  });
});

// delete a task
const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await taskService.deleteTask(id);

  responseForData.sendResponseForCreate<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'List Delete Successful',
    data: result,
  });
});

export const taskController = {
  createTask,
  getAllTask,
  getASingleTask,
  updateTask,
  deleteTask,
};
