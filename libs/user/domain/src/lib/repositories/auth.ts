import { Observable } from 'rxjs';
import { AuthResponse } from '../dtos/auth-response';
import { UserCredential } from '../dtos/user-credential';

export abstract class AuthRepository {
  abstract signIn(value: UserCredential): Observable<AuthResponse>;
}
