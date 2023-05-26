import {
  CreateOne,
  UpdateOne,
  FindOneBy,
  FindAll,
} from '@authzn/core/domain';
import { CreateUser, UpdateUser, UserResponse } from '../dtos';
import { User } from '../entities/user';
import { Observable } from 'rxjs';

export abstract class UserRepository
  implements
    CreateOne<CreateUser, UserResponse>,
    UpdateOne<UpdateUser, 'id', User>,
    FindOneBy<User>,
    FindAll<User>
{
  abstract createOne(input: CreateUser): Observable<UserResponse>;
  abstract updateOne(key: string, input: User): Observable<User>;
  abstract findAll(): Observable<User[]>;
  abstract findOneBy<K extends keyof User>(
    key: K,
    value: User[K]
  ): Observable<User>;
}
