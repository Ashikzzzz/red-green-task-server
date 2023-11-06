import { Schema, model } from 'mongoose';
import { IList, ListModel } from './list.interface';

const userSchema = new Schema<IList>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const List = model<IList, ListModel>('List', userSchema);
