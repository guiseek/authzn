import { Store } from '@authzn/core/data-access';
import {
  AuthResponse,
  CreateUser,
  GetProfileUseCase,
  SignInUseCase,
  SignUpUseCase,
  UserCredential,
  UserResponse,
} from '@authzn/user/domain';

interface AuthState {
  accessToken: string | null;
  auth: AuthResponse | null;
  user: UserResponse | null;
  authenticated: boolean;
  loading: boolean;
  message: string | null;
  errors: string[];
}

export class AuthFacade extends Store<AuthState> {
  auth$ = this.select((state) => state.auth);
  user$ = this.select((state) => state.user);
  errors$ = this.select((state) => state.errors);
  message$ = this.select((state) => state.message);
  authenticated$ = this.select((state) => state.authenticated);
  loading$ = this.select((state) => state.loading);

  constructor(
    private readonly signInUseCase: SignInUseCase,
    private readonly signUpUseCase: SignUpUseCase,
    private readonly getProfileUseCase: GetProfileUseCase
  ) {
    super({
      accessToken: null,
      auth: null,
      user: null,
      authenticated: false,
      loading: false,
      message: null,
      errors: [],
    });
  }

  signIn(userCredential: UserCredential) {
    this.setState({ loading: true });
    this.signInUseCase.execute(userCredential).subscribe(({ accessToken }) => {
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        this.setState({ accessToken, authenticated: true, loading: false });
      }
    });
  }

  signUp(createUser: CreateUser) {
    this.setState({ loading: true });
    this.signUpUseCase
      .execute(createUser)
      .subscribe((user) => {
        const message = `Olá ${user.firstName}, faça login`;
        this.setState({ user, message, loading: false });
      });
  }

  getProfile() {
    this.setState({ loading: true });
    this.getProfileUseCase.execute().subscribe((auth) => {
      this.setState({ auth, authenticated: !!auth, loading: false });
    });
  }
}
