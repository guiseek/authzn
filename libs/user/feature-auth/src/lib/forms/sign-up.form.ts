import { FormGroup, Validators } from '@angular/forms';
import { CreateUser } from '@authzn/user/api-interfaces';
import { TypedForm, createControl } from '@authzn/user/ui-shared';

export class SignUpForm extends FormGroup<TypedForm<CreateUser>> {
  constructor() {
    super({
      firstName: createControl('', Validators.required),
      lastName: createControl('', Validators.required),
      username: createControl('', Validators.required),
      password: createControl('', Validators.required),
    });
  }

  getValue() {
    return this.value as CreateUser;
  }
}
