import { Observable } from 'rxjs';

export abstract class Http<T = unknown> {
  constructor(protected readonly baseUrl = '/api') {}

  protected abstract request<R = T, D = void>(
    method: string,
    path: string,
    data?: T | D
  ): Observable<R>;

  get<R>(path: string) {
    return this.request<R>('GET', path);
  }

  post<R, D = unknown>(path: string, data: D) {
    return this.request<R, D>('POST', path, data);
  }

  put<R, D = unknown>(path: string, data: D) {
    return this.request<R, D>('PUT', path, data);
  }

  delete<R>(path: string) {
    return this.request<R>('DELETE', path);
  }
}
