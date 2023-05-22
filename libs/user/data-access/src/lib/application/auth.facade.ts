import { Store } from '@authzn/core/data-access';
import {
  AuthResponse,
  CreateUser,
  SignInUseCase,
  SignUpUseCase,
  UserCredential,
  UserResponse,
} from '@authzn/user/domain';

interface AuthState {
  auth: AuthResponse | null;
  user: UserResponse | null;
  loading: boolean;
}

export class AuthFacade extends Store<AuthState> {
  auth$ = this.select((state) => state.auth);
  user$ = this.select((state) => state.user);
  loading$ = this.select((state) => state.loading);

  constructor(
    private readonly signInUseCase: SignInUseCase,
    private readonly signUpUseCase: SignUpUseCase
  ) {
    super({
      auth: null,
      user: null,
      loading: false,
    });
  }

  signIn(userCredential: UserCredential) {
    this.setState({ loading: true });
    this.signInUseCase
      .execute(userCredential)
      .subscribe((auth) => this.setState({ auth, loading: false }));
  }

  signUp(createUser: CreateUser) {
    this.setState({ loading: true });
    this.signUpUseCase
      .execute(createUser)
      .subscribe((user) => this.setState({ user, loading: false }));
  }
}
