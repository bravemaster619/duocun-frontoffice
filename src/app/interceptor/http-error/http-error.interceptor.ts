import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
      private authenticationService: AuthenticationService,
      private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.handleUnauthorized();
            } else if (err.status === 404) {
              this.handleNotFound();
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }

    handleUnauthorized() {
      this.authenticationService.logout();
      location.reload(true);
    }

    handleNotFound() {
      this.router.navigate(['/not-found']);
    }

}