import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public auth: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Observable((observer) => {
      this.auth.getAuthState().subscribe(isLoggedIn => {
        if (isLoggedIn) {
          observer.next(true);
        } else {
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          observer.next(false);
        }
      })
    });
  }
  
}
