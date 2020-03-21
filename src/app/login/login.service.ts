import { AuthService } from './../auth/auth.service';
import { ActiveUser } from './../models/ActiveUser';
import { Observable } from 'rxjs';
import { LoginUser } from './../models/LoginUser';
import { LoginModule } from './login.module';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private authService: AuthService) { }

  login(user: LoginUser): Observable<ActiveUser> {
    return this.authService.login(user);
  }
}
