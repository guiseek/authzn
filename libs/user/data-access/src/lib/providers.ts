import { register } from '@authzn/core/util-common';
import {
  AuthRepository,
  SignInUseCase,
  SignUpUseCase,
  UserRepository,
} from '@authzn/user/domain';
import {
  AuthStubRepositoryImpl,
  UserStubRepositoryImpl,
} from './infrastructure';
import { AuthFacade } from './application';

export const userProviders = {
  infrastructure() {
    register(
      {
        for: UserRepository,
        use: UserStubRepositoryImpl,
      },
      {
        for: AuthRepository,
        use: AuthStubRepositoryImpl,
      }
    );
  },
  useCases() {
    register(
      {
        for: SignUpUseCase,
        use: SignUpUseCase,
        add: [UserRepository],
      },
      {
        for: SignInUseCase,
        use: SignInUseCase,
        add: [AuthRepository],
      }
    );
  },
  application() {
    register({
      for: AuthFacade,
      use: AuthFacade,
      add: [SignInUseCase, SignUpUseCase],
    });
  },
};
