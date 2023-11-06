import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { listService } from './list.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';

// create list
const createUser = catchAsync(async (req: Request, res: Response) => {
  const listData = req.body;

  const result = await listService.createList(listData);
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'List created Successful',
    data: result,
  });
});

export const listController = {
  createUser,
};
