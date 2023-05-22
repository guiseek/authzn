import { Observable } from 'rxjs';

export interface FindOne<I, K extends keyof I, O> {
  findOne(key: I[K]): Observable<O>;
}
