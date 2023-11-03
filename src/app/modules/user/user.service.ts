import { IUser } from './user.interface';
import { User } from './user.model';

// create a user
const createUser = async (user: IUser) => {
  const result = await User.create(user);
  return result;
};

export const userService = {
  createUser,
};
