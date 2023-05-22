import { HttpRequestOptions } from './http-request-options';
import { HttpResponse } from './http-response';
import { Observable } from 'rxjs';

export interface HttpClient {
  request<T>(
    url: string,
    options?: HttpRequestOptions
  ): Observable<HttpResponse<T>>;
  get<T>(url: string, options?: HttpRequestOptions): Observable<T>;
  post<T>(url: string, body?: any, options?: HttpRequestOptions): Observable<T>;
  put<T>(url: string, body?: any, options?: HttpRequestOptions): Observable<T>;
  delete<T>(url: string, options?: HttpRequestOptions): Observable<T>;
}
