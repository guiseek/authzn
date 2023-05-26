import { UseCase } from '@authzn/core/domain';
import { UserRepository } from '../../repositories/user';
import { CreateUser, UserResponse } from '../../dtos';
import { AuthRepository } from '../../repositories';

export class SignUpUseCase implements UseCase<CreateUser, UserResponse> {
  constructor(private readonly repository: AuthRepository) {}

  execute(createUser: CreateUser) {
    return this.repository.signUp(createUser);
  }
}
