import { User } from '../entities/user';

export type CreateUser = Omit<User, 'id'>;
