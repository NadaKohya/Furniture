import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

authorizationError=false;

  constructor(public loginService:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.loginService.getToken();
    if(myToken){
      request=request.clone({
        setHeaders:{
          Authorization:`Bearer ${myToken}`,
'Content-Type':'application/json'
        }
      })
    }

    return next.handle(request).pipe(
      catchError((err:any)=>{
if(err instanceof HttpErrorResponse){
  if(err.status==401){
    this.authorizationError=true;
    this.loginService.logOut();
  }
}
return throwError(()=>"Another error occured!");
      })
    );
  }
}
