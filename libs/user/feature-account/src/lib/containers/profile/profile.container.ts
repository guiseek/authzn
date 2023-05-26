import { Component, OnInit } from '@angular/core';
import { AccountFacade } from '@authzn/user/data-access';
import { createGroup } from '@authzn/user/ui-shared';
import { UserResponse } from '@authzn/user/api-interfaces';
import { Validators } from '@angular/forms';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.container.html',
  styleUrls: ['./profile.container.scss'],
})
export class ProfileContainer implements OnInit {

  form = createGroup<UserResponse>(
    ['id', '', Validators.required],
    ['firstName', '', Validators.required],
    ['lastName', '', Validators.required],
    ['username', '', Validators.required],
  )

  constructor(readonly accountFacade: AccountFacade) {}

  ngOnInit() {
    this.accountFacade.getProfile();
    this.accountFacade.profile$.subscribe((profile) => {
      const { sub, ...value } = profile ?? {};
      this.form.patchValue({ id: sub, ...value });
    });
  }
}
