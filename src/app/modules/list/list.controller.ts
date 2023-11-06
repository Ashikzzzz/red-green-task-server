import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { listService } from './list.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { IList } from './list.interface';

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

// get all list
const getAllList = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'title', 'createdAt']);
  const paginationOption = pick(req.query, [
    'limit',
    'page',
    'sortBy',
    'sortOrder',
  ]);

  const result = await listService.getAllList(filters, paginationOption);

  responseForData.sendResponse<IList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successful',
    data: result.data,
    meta: result.meta,
  });
  // next();
});

export const listController = {
  createUser,
  getAllList,
};
