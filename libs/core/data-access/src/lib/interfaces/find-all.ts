import { Observable } from 'rxjs';

export interface FindAll<O> {
  findAll(): Observable<O[]>;
}
