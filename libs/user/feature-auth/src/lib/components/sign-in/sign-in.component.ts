import { Component, Input } from '@angular/core';
import { SignInForm } from '../../forms';

@Component({
  selector: 'user-sign-in,form[user-sign-in]',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  @Input() formGroup = new SignInForm();
}
