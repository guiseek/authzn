import {
  AuthRepository,
  AccessTokenResponse,
  CreateUser,
  UserCredential,
  UserResponse,
} from '@authzn/user/domain';
import { Observable, of } from 'rxjs';

export class AuthStubRepositoryImpl implements AuthRepository {
  signIn(value: UserCredential): Observable<AccessTokenResponse> {
    return of({
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm',
    });
  }
  signUp(value: CreateUser): Observable<UserResponse> {
    return of(value as any);
  }

  deleteAccount(): Observable<void> {
    return of()
  }

  getProfile() {
    return of({} as any);
  }
}
