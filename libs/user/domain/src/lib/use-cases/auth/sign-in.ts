import { UseCase } from '@authzn/core/domain';
import { AuthRepository } from '../../repositories/auth';
import { UserCredential } from '../../dtos/user-credential';
import { AccessTokenResponse } from '../../dtos/access-token-response';

export class SignInUseCase implements UseCase<UserCredential, AccessTokenResponse> {
  constructor(private repository: AuthRepository) {}

  execute(input: UserCredential) {
    return this.repository.signIn(input)
  }
}
