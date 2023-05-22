import { UseCase } from '@authzn/core/domain';
import { AuthRepository } from '../../repositories/auth';
import { UserCredential } from '../../dtos/user-credential';
import { AuthResponse } from '../../dtos/auth-response';

export class SignInUseCase implements UseCase<UserCredential, AuthResponse> {
  constructor(private repository: AuthRepository) {}

  execute(input: UserCredential) {
    return this.repository.signIn(input);
  }
}
