import { Schema, model } from 'mongoose';
import { ITask, TaskModel } from './task.interface';

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'done'],
    },
    list: {
      type: Schema.Types.ObjectId,
      ref: 'List',
    },
  },
  {
    timestamps: true,
  },
);

export const Task = model<ITask, TaskModel>('Task', taskSchema);
