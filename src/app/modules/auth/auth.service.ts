import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import bcrypt from 'bcrypt';
import { ILoginUser, ILoginUserResponse } from './auth.interface';
import { jwtToken } from '../../../shared/jwtToken';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

// login user
const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  // check user existance
  const isUserExist = await User.findOne(
    { email },
    { email: 1, password: 1, role: 1 },
  ).lean();
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't exist");
  }

  //check matched password
  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist?.password,
  );

  // check password
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password isn't matched");
  }

  const { email: userEmail, role } = isUserExist;

  // create access token
  const accessToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_secret as Secret,
    { expiresIn: config.jwt_expires_in as string },
  );

  // create refresh token
  const refreshToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_refresh_token as Secret,
    { expiresIn: config.jwt_refresh_expires_in as string },
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const authService = {
  loginUser,
};
