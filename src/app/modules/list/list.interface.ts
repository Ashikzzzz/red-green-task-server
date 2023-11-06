import { Model } from 'mongoose';

export type IList = {
  title: string;
};

export type ListModel = Model<IList, Record<string, unknown>>;
