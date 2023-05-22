import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@authzn/user/feature-auth').then((m) => m.UserFeatureAuthModule),
  },
];
