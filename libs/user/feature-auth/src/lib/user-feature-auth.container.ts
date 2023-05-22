import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthFacade } from '@authzn/user/data-access';
import { UserCredential } from '@authzn/user/domain';

type TypedForm<T, K extends keyof T = keyof T> = Record<K, FormControl<T[K]>>;

@Component({
  selector: 'user-user-feature-auth',
  templateUrl: './user-feature-auth.container.html',
  styleUrls: ['./user-feature-auth.container.scss'],
})
export class UserFeatureAuthContainer {
  form = new FormGroup<TypedForm<UserCredential>>({
    username: new FormControl<string>('kminchelle', {
      nonNullable: true,
    }),
    password: new FormControl<string>('0lelplR', {
      nonNullable: true,
    }),
  });

  constructor(readonly authFacade: AuthFacade) {}

  onSubmit() {
    if (this.form.valid) {
      const { username = '', password = '' } = this.form.value;
      this.authFacade.signIn({ username, password });
    }
  }
}
