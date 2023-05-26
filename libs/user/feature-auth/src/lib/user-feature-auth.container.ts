import { Component } from '@angular/core';
import { AuthFacade } from '@authzn/user/data-access';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInForm, SignUpForm } from './forms';

@Component({
  selector: 'user-user-feature-auth',
  templateUrl: './user-feature-auth.container.html',
  styleUrls: ['./user-feature-auth.container.scss'],
})
export class UserFeatureAuthContainer {
  signInForm = new SignInForm();
  signUpForm = new SignUpForm();

  constructor(
    readonly authFacade: AuthFacade,
    route: ActivatedRoute,
    router: Router
  ) {
    this.authFacade.getProfile();
    this.authFacade.authenticated$.subscribe((state) => {
      if (state) {
        const { redirectTo } = route.snapshot.queryParams;
        router.navigateByUrl(redirectTo ?? '/account');
      }
    });
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      this.authFacade.signUp(this.signUpForm.getValue());
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }

  onSignIn() {
    if (this.signInForm.valid) {
      this.authFacade.signIn(this.signInForm.getValue());
    } else {
      this.signInForm.markAllAsTouched();
    }
  }
}
