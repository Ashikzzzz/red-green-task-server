import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';

// create a user
const createUser = async (user: IUser) => {
  // create user for one time
  const isExistUser = await User.findOne({
    email: user.email,
  });

  if (isExistUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User is already exist');
  }

  const result = await User.create(user);
  return result;
};

export const userService = {
  createUser,
};
