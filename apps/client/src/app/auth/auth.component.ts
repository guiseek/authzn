import { Component } from '@angular/core';

@Component({
  selector: 'authzn-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  onSubmit() {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  }
}
