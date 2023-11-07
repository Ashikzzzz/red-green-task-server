import { Model, Types } from 'mongoose';
import { IList } from '../list/list.interface';

export type ITask = {
  title: string;
  status: 'pending' | 'done';
  list: Types.ObjectId | IList;
};

export type ITaskFilters = {
  searchTerm?: string;
};

export type TaskModel = Model<ITask, Record<string, unknown>>;
