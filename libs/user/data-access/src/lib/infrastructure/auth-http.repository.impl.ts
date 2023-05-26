import { Http } from '@authzn/core/data-access';
import {
  AuthRepository,
  AccessTokenResponse,
  CreateUser,
  UserCredential,
  UserResponse,
  AuthResponse,
} from '@authzn/user/domain';
import { Observable } from 'rxjs';

export class AuthHttpRepositoryImpl implements AuthRepository {
  constructor(private http: Http) {}

  signIn(value: UserCredential): Observable<AccessTokenResponse> {
    return this.http.post<AccessTokenResponse>('auth/login', value);
  }

  signUp(value: CreateUser): Observable<UserResponse> {
    return this.http.post<UserResponse>('auth/register', value);
  }

  getProfile() {
    return this.http.get<AuthResponse>('auth/profile');
  }

  deleteAccount() {
    return this.http.delete<void>('auth/account');
  }
}
