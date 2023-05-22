import { HttpClient } from '@authzn/core/data-access';
import {
  AuthRepository,
  AuthResponse,
  UserCredential,
} from '@authzn/user/domain';
import { Observable } from 'rxjs';

export class AuthHttpRepositoryImpl implements AuthRepository {
  constructor(private http: HttpClient) {}

  signIn(value: UserCredential): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth', value);
  }
}
