import { Observable } from 'rxjs';

export interface FindOneBy<T> {
  findOneBy<K extends keyof T>(key: K, ...values: T[K][]): Observable<T>;
}
