import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route:any, state:any) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  let lState: boolean = true;
  const ACCESS_TOKEN = '_kit_ta';
  const isLoggedIn = cookieService.get(ACCESS_TOKEN) ? true : false;
  console.log('authGuard', isLoggedIn);
  console.log('authGuard', route.routeConfig.path);
  if (isLoggedIn) {
    lState = false;
    router.navigateByUrl('/private');
  }
  return lState;
};
