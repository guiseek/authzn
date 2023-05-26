import { Observable } from 'rxjs';

export const catchErrorMessage = <T>(err: any, caught: Observable<T>) => {
  if (err) {
    throw err.response.data;
  }
  return caught;
};
