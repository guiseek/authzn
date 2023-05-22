import { User } from '../entities';

export type UserResponse = Omit<User, 'password'>;
