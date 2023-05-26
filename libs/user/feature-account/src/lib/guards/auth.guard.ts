import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '@authzn/user/data-access';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(AuthFacade).authenticated$.pipe(
    tap((authenticated) => {
      if (!authenticated) {
        const queryParams = { redirectTo: state.url };
        router.navigate(['/auth'], { queryParams });
      }
    })
  );
};
