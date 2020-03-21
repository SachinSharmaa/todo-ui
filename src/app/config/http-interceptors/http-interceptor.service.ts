import { AuthService } from '../../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getUserToken()) {
      const authToken = this.authService.getUserToken();

      const authReq = req.clone({
        headers: req.headers.set('authorization', 'Bearer ' + authToken)
      });

      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
