import { Observable } from 'rxjs';

export interface CreateOne<I, O> {
  createOne(input: I): Observable<O>;
}
