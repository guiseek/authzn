import { UseCase } from '@authzn/core/domain';
import { AuthRepository } from '../../repositories';

export class DeleteAccountUseCase implements UseCase<void, void> {
  constructor(private repository: AuthRepository) {}

  execute() {
    return this.repository.deleteAccount();
  }
}
