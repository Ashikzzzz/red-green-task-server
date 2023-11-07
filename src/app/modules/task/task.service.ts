import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOption } from '../../../shared/pagination';
import { ITask, ITaskFilters } from './task.interface';
import { Task } from './task.model';

// create a task
const createTask = async (payload: ITask) => {
  const result = (await Task.create(payload)).populate('list');
  return result;
};

// get all task
const getAllTask = async (
  filters: ITaskFilters,
  paginationOption: IPaginationOption,
): Promise<IGenericResponse<ITask[]>> => {
  const { searchTerm, ...filtersData } = filters;

  // this is for search
  const academicSemesterSearchFiled = ['title'];
  const andCconditions = [];
  if (searchTerm) {
    andCconditions.push({
      $or: academicSemesterSearchFiled.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // this is for filter part

  if (Object.keys(filtersData).length) {
    andCconditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions =
    andCconditions.length > 0 ? { $and: andCconditions } : {};

  // this is for pagination

  const { page = 1, limit = 10 } = paginationOption;
  const skip = (page - 1) * limit;

  const result = await Task.find(whereConditions)
    .sort({
      createdAt: 'desc',
    })
    .skip(skip)
    .limit(limit);
  const total = await Task.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// get single task

const getASingleTask = async (id: string): Promise<ITask | null> => {
  const result = await Task.findById(id);
  return result;
};

// update a task
const updateTask = async (id: string, payload: Partial<ITask>) => {
  const result = await Task.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// delete a Task
const deleteTask = async (id: string): Promise<ITask | null> => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

export const taskService = {
  createTask,
  getAllTask,
  getASingleTask,
  updateTask,
  deleteTask,
};
