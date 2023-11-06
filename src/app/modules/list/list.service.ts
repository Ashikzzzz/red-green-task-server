import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOption } from '../../../shared/pagination';
import { IList, IListFilters } from './list.interface';
import { List } from './list.model';

// create list

const createList = async (payload: IList) => {
  const result = await List.create(payload);
  return result;
};

// get all list
const getAllList = async (
  filters: IListFilters,
  paginationOption: IPaginationOption,
): Promise<IGenericResponse<IList[]>> => {
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

  const result = await List.find(whereConditions)
    .sort({
      createdAt: 'desc',
    })
    .skip(skip)
    .limit(limit);
  const total = await List.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// get a single list
const getASingleList = async (id: string): Promise<IList | null> => {
  const result = await List.findById(id);
  return result;
};

// update a list
const updateList = async (id: string, payload: Partial<IList>) => {
  const result = await List.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// delete a list
const deleteList = async (id: string): Promise<IList | null> => {
  const result = await List.findByIdAndDelete(id);
  return result;
};

export const listService = {
  createList,
  getAllList,
  getASingleList,
  updateList,
  deleteList,
};
