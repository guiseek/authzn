import { Observable } from 'rxjs';

export interface FilterBy<I, O> {
  filterBy<K extends keyof I>(key: K, ...values: I[K][]): Observable<O[]>;
}
