import { Model } from 'mongoose';

export type IUser = {
  email: string;
  password: string;
  role: 'admin' | 'Viewer' | 'reguler user';
};

export type UserModel = Model<IUser, Record<string, unknown>>;
