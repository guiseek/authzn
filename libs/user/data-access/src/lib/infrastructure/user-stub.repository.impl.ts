import {
  User,
  CreateUser,
  UserResponse,
  UserRepository,
} from '@authzn/user/domain';
import { Observable, of } from 'rxjs';

export class UserStubRepositoryImpl implements UserRepository {
  constructor(private readonly users: User[] = []) {}

  createOne(input: CreateUser): Observable<UserResponse> {
    const { username, firstName, lastName } = input;
    const id = crypto.randomUUID();

    const user = { ...input, id };
    this.users.push(user);

    return of({ username, firstName, lastName, id });
  }

  updateOne(key: string, input: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
  findAll(): Observable<User[]> {
    throw new Error('Method not implemented.');
  }
  findOneBy<K extends keyof User>(key: K, value: User[K]): Observable<User> {
    throw new Error('Method not implemented.');
  }
}
