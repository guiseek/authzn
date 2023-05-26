import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_MODULES } from './shared';
import { userFeatureAccountRoutes } from './user-feature-account.routes';
import { UserFeatureAccountContainer } from './user-feature-account.container';
import { ProfileContainer } from './containers/profile/profile.container';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { SecurityContainer } from './containers/security/security.container';

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    ReactiveFormsModule,
    RouterModule.forChild(userFeatureAccountRoutes),
  ],
  declarations: [
    UserFeatureAccountContainer,
    ProfileContainer,
    SidenavMenuComponent,
    PasswordStrengthComponent,
    SecurityContainer,
  ],
})
export class UserFeatureAccountModule {}
