import axios from 'axios';
import { catchError, from } from 'rxjs';
import { catchErrorMessage } from '../mappers';
import { Http } from './http';

axios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export class AxiosHttpImpl<T> extends Http<T> {
  protected request<R, D = void>(method: string, path: string, data?: T | D) {
    const url = `${this.baseUrl}/${path}`;
    const response = axios.request<R>({ method, url, data });
    return from(response.then((res) => res.data)).pipe(
      catchError(catchErrorMessage)
    );
  }
}
