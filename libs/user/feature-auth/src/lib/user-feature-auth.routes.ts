import { Route } from '@angular/router';
import { UserFeatureAuthContainer } from './user-feature-auth.container';

export const userFeatureAuthRoutes: Route[] = [
  {
    path: '',
    component: UserFeatureAuthContainer,
  },
];
