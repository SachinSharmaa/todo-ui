import { HttpErrorService } from './../shared/config/http-error.service';
import { AuthService } from './../auth/auth.service';
import { ActiveUser } from './../models/ActiveUser';
import { Observable } from 'rxjs';
import { LoginUser } from './../models/LoginUser';
import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators';

@Injectable()
export class LoginService {

  constructor(private authService: AuthService, private httpErrorService: HttpErrorService) { }

  login(user: LoginUser): Observable<ActiveUser> {
    return this.authService.login(user).pipe(
      catchError(this.httpErrorService.handleError)
    );
  }
}
