import { Observable } from 'rxjs';

export interface UpdateOne<I, K extends keyof I, O> {
  updateOne(key: I[K], input: I): Observable<O>;
}
