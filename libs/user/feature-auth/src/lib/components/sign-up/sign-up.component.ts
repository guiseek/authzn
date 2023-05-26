import { Component, Input } from '@angular/core';
import { SignUpForm } from '../../forms/sign-up.form';

@Component({
  selector: 'user-sign-up,form[user-sign-up]',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  @Input() formGroup = new SignUpForm()
}
