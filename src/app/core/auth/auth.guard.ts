import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Auth, user } from '@angular/fire/auth';
import { map } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const auth:Auth = inject(Auth)
  const router: Router = inject(Router)
  const user$ = user(auth);

  return user$.pipe(
    map((user) => {
      if(!user) {
        router.navigate(["/login"])
        return false
      } else {
        return true
      }
    })
  )
};

export const redirectLogin: CanActivateFn = (route, state) => {
  const auth:Auth = inject(Auth)
  const router: Router = inject(Router)
  const user$ = user(auth);

  return user$.pipe(
    map((user) => {
      if(user) {
        router.navigate([""])
        return false
      } else {
        return true
      }
    })
  );
}
