import { Component, OnInit } from '@angular/core';
import { inject } from '@authzn/core/util-common';

@Component({
  selector: 'authzn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // authRepo = inject(AuthRepository);

  ngOnInit(): void {
    // console.log(this.authRepo);
    // this.authRepo
    //   .signIn({
    //     username: '',
    //     password: '',
    //   })
    //   .subscribe(console.log);
  }
}
