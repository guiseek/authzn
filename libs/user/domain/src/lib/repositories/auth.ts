import { Observable } from 'rxjs';
import { AccessTokenResponse } from '../dtos/access-token-response';
import { UserCredential } from '../dtos/user-credential';
import { CreateUser, UserResponse, AuthResponse } from '../dtos';

export abstract class AuthRepository {
  abstract signIn(value: UserCredential): Observable<AccessTokenResponse>;
  abstract signUp(value: CreateUser): Observable<UserResponse>;
  abstract getProfile(): Observable<AuthResponse>;
  abstract deleteAccount(): Observable<void>;
}
