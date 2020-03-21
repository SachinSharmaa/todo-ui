import { HttpInterceptorService } from './http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
];
