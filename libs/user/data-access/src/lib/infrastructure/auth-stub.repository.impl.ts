import {
  AuthRepository,
  AuthResponse,
  UserCredential,
} from '@authzn/user/domain';
import { Observable, of } from 'rxjs';

export class AuthStubRepositoryImpl implements AuthRepository {
  signIn(value: UserCredential): Observable<AuthResponse> {
    return of({
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm',
    });
  }
}
