import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  

  const router = inject(Router)

  let isLoggedIn = sessionStorage.getItem("isLoggedIn")

  if (isLoggedIn=="true") {
    return true;
  } else {
    alert("Plz Login, Redirecting to Login page !!!")
    router.navigate(['login'])
    return false;
  }


};
