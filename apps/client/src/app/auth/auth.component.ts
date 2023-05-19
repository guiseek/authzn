import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'authzn-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  form = new FormGroup({
    username: new FormControl('kminchelle'),
    password: new FormControl('0lelplR')
  })

  response: Record<string, string> = {}

  onSubmit() {
    const { username, password } = this.form.value

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then(response => {
        this.response = response
      });
  }
}
