import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { userFeatureAuthRoutes } from './user-feature-auth.routes';
import { UserFeatureAuthContainer } from './user-feature-auth.container';
import { SignInComponent, SignUpComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(userFeatureAuthRoutes),
  ],
  declarations: [UserFeatureAuthContainer, SignInComponent, SignUpComponent],
})
export class UserFeatureAuthModule {}
