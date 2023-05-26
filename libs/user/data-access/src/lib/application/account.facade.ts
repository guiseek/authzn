import { Store } from '@authzn/core/data-access';
import {
  DeleteAccountUseCase,
  GetProfileUseCase,
  AuthResponse,
} from '@authzn/user/domain';

interface AccountState {
  profile: AuthResponse | null;
  loading: boolean;
}

export class AccountFacade extends Store<AccountState> {
  profile$ = this.select((state) => state.profile);
  loading$ = this.select((state) => state.loading);

  constructor(
    private readonly getProfileUseCase: GetProfileUseCase,
    private readonly deleteAccountUseCase: DeleteAccountUseCase
  ) {
    super({
      profile: null,
      loading: false,
    });
  }

  deleteAccount() {
    this.deleteAccountUseCase
      .execute()
      .subscribe(() => this.setState({ profile: null }));
  }

  getProfile() {
    this.getProfileUseCase
      .execute()
      .subscribe((profile) => this.setState({ profile }));
  }
}
