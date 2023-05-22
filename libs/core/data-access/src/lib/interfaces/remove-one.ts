import { Observable } from 'rxjs';

export interface RemoveOne<I, K extends keyof I, O> {
  removeOne(key: I[K]): Observable<O>;
}
