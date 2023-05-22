import { UseCase } from '@authzn/core/domain';
import { UserRepository } from '../../repositories/user';
import { CreateUser, UserResponse } from '../../dtos';

export class SignUpUseCase implements UseCase<CreateUser, UserResponse> {
  constructor(private readonly repository: UserRepository) {}

  execute(createUser: CreateUser) {
    return this.repository.createOne(createUser);
  }
}
