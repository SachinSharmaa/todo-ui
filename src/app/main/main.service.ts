import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { HttpErrorService } from './../config/http-error.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class MainService {

  constructor(private httpErrorService: HttpErrorService, private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(environment.API_URL + 'user').pipe(
      catchError(this.httpErrorService.handleError)
    );
  }
}
