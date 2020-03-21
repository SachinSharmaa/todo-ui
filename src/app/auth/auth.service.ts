import { ActiveUser } from './../models/ActiveUser';
import { LoginUser } from './../models/LoginUser';
import { LoginComponent } from './../login/login.component';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl: string = environment.API_URL + 'user/login';

  constructor(private http: HttpClient) {

  }

  login(user: LoginUser): Observable<ActiveUser> {
    return this.http.post<ActiveUser>(this.loginUrl, user);
  }

  isLoggedIn() {
    return localStorage.getItem('todoUserToken');
  }


}
