import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'user-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavMenuComponent {}
