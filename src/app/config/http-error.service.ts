import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  errorMessage: string;

  constructor() { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.errorMessage = 'Network error: ' + error.error.message;
    } else {
      this.errorMessage = error.status === 0 ? error.message  : error.status + ': ' + error.error.error;
    }
    return throwError(this.errorMessage);
  }

}
