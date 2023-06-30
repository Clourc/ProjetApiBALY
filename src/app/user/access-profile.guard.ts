import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from './user.service';

export const accessProfileGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.isLoggedIn){
    return true;
  }

  router.navigate(['/login']);
  return false;
};
