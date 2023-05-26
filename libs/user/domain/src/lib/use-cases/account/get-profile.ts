import { UseCase } from '@authzn/core/domain';
import { AuthResponse } from '../../dtos';
import { AuthRepository } from '../../repositories';

export class GetProfileUseCase implements UseCase<void, AuthResponse> {
  constructor(private readonly repository: AuthRepository) {}

  execute() {
    return this.repository.getProfile();
  }
}
