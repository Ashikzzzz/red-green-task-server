import { IGenericErrorMessage } from './error';

export type IGenericResponseMessage = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};

export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};

export type Iemail = {
  to: string;
  subject: string;
  text: string;
};
