import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userFeatureAuthRoutes } from './user-feature-auth.routes';
import { UserFeatureAuthContainer } from './user-feature-auth.container';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(userFeatureAuthRoutes),
  ],
  declarations: [UserFeatureAuthContainer],
})
export class UserFeatureAuthModule {}
