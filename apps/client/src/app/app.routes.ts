import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'account',
    loadChildren: () =>
      import('@authzn/user/feature-account').then(
        (m) => m.UserFeatureAccountModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@authzn/user/feature-auth').then((m) => m.UserFeatureAuthModule),
  },
  {
    path: '**',
    redirectTo: 'account'
  }
];
