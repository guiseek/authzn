import { register } from '@authzn/core/util-common';
import { Http } from '@authzn/core/data-access';
import { AuthFacade, AccountFacade } from './application';
import {
  AuthHttpRepositoryImpl,
  UserHttpRepositoryImpl,
} from './infrastructure';
import {
  AuthRepository,
  DeleteAccountUseCase,
  GetProfileUseCase,
  SignInUseCase,
  SignUpUseCase,
  UserRepository,
} from '@authzn/user/domain';

export const userProviders = {
  infrastructure() {
    register(
      {
        for: UserRepository,
        use: UserHttpRepositoryImpl,
        add: [Http],
      },
      {
        for: AuthRepository,
        use: AuthHttpRepositoryImpl,
        add: [Http],
      }
    );
  },
  useCases() {
    register(
      {
        for: SignUpUseCase,
        use: SignUpUseCase,
        add: [AuthRepository],
      },
      {
        for: SignInUseCase,
        use: SignInUseCase,
        add: [AuthRepository],
      },
      {
        for: GetProfileUseCase,
        use: GetProfileUseCase,
        add: [AuthRepository],
      },
      {
        for: DeleteAccountUseCase,
        use: DeleteAccountUseCase,
        add: [AuthRepository],
      }
    );
  },
  application() {
    register(
      {
        for: AuthFacade,
        use: AuthFacade,
        add: [SignInUseCase, SignUpUseCase, GetProfileUseCase],
      },
      {
        for: AccountFacade,
        use: AccountFacade,
        add: [GetProfileUseCase, DeleteAccountUseCase],
      }
    );
  },
};
