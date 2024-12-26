import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { BaseResponse } from '../models/base.response';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  router: Router;
  http: HttpClient;

  constructor(private _router: Router, private _http: HttpClient,) {
    this.router = _router;
    this.http = _http;

  }

  // public extractData(res: BaseResponse) {
  //   console.log(res);
  //   return JSON.parse(res.Response);

  // }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error.status === 403 || error.status === 408) {

        this.router.navigateByUrl('/login');
      }
      if (error.status === 401) {
        this.router.navigateByUrl('/unauthorized');
      }

    }
    // return an ErrorObservable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
