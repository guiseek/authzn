import { Http } from '@authzn/core/data-access';
import {
  User,
  CreateUser,
  UserResponse,
  UserRepository,
} from '@authzn/user/domain';
import { Observable } from 'rxjs';

export class UserHttpRepositoryImpl implements UserRepository {
  constructor(private http: Http<User>) {}

  createOne(input: CreateUser): Observable<UserResponse> {
    return this.http.post('users', input);
  }

  updateOne(key: string, input: User): Observable<User> {
    return this.http.put(`users/${key}`, input);
  }

  findAll() {
    return this.http.get<User[]>(`users`);
  }

  findOneBy<K extends keyof User>(key: K, value: User[K]): Observable<User> {
    return this.http.get<User>(`users/one/${key}/${value}`);
  }
}
