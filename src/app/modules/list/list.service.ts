import { IList } from './list.interface';
import { List } from './list.model';

// create list

const createList = async (payload: IList) => {
  const result = await List.create(payload);
  return result;
};

export const listService = {
  createList,
};
