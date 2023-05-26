import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'user-user-feature-account',
  templateUrl: './user-feature-account.container.html',
  styleUrls: ['./user-feature-account.container.scss'],
})
export class UserFeatureAccountContainer {
  title = 'Conta';

  bpObserver = inject(BreakpointObserver);

  isHandset$ = this.bpObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );
}
