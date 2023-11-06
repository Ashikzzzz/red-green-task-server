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

// get a single list
const getASingleList = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await listService.getASingleList(id);

  responseForData.sendResponseForCreate<IList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Successful',
    data: result,
  });
});

// update a list
const updateList = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await listService.updateList(id, updateData);

  responseForData.sendResponseForCreate<IList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'List Update Successful',
    data: result,
  });
});

// delete list
const deleteList = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await listService.deleteList(id);

  responseForData.sendResponseForCreate<IList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'List Delete Successful',
    data: result,
  });
});

export const listController = {
  createUser,
  getAllList,
  getASingleList,
  updateList,
  deleteList,
};
