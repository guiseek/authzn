import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { createGroup } from '@authzn/user/ui-shared';

interface Security {
  currentPassword: string;
  newPassword: string;
}

@Component({
  selector: 'user-security',
  templateUrl: './security.container.html',
  styleUrls: ['./security.container.scss'],
})
export class SecurityContainer {
  form = createGroup<Security>(
    ['currentPassword', '', Validators.required],
    ['newPassword', '', Validators.required, Validators.minLength(4)]
  );
}
