import { Route } from '@angular/router';
import { ProfileContainer, SecurityContainer } from './containers';
import { UserFeatureAccountContainer } from './user-feature-account.container';
import { authGuard } from './guards/auth.guard';

export const userFeatureAccountRoutes: Route[] = [
  {
    path: '',
    component: UserFeatureAccountContainer,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: ProfileContainer,
      },
      {
        path: 'security',
        component: SecurityContainer,
      },
    ],
  },
];
