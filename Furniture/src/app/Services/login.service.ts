import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL=this.urlService.loginURL;
UserName:string="";
Password:string="";

  constructor(private http:HttpClient, private router:Router, public urlService:UrlService) { }

  settingValues(user:any){
this.UserName=user.UserName;
this.Password=user.Password;
  }

  login(user:any){
return this.http.post(this.URL,user);
  }

  setToken(data:any){
    return localStorage.setItem('token',(data).token)
  }

getToken(){
  return localStorage.getItem('token');
}

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
