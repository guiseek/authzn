import { FormGroup, Validators } from '@angular/forms';
import { UserCredential } from '@authzn/user/api-interfaces';
import { TypedForm, createControl } from '@authzn/user/ui-shared';

export class SignInForm extends FormGroup<TypedForm<UserCredential>> {
  constructor() {
    super({
      username: createControl('', Validators.required),
      password: createControl('', Validators.required),
    });
  }

  getValue() {
    return this.value as UserCredential;
  }
}
