import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  requestTimeOut = false;

  
  constructor(public loginService: LoginService, private router: Router) {}
  
  ngOnInit(): void {}

  loginForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  });

  get Name() {
    return this.loginForm.get('UserName');
  }

  get Password() {
    return this.loginForm.get('Password');
  }

  login(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    console.log("login button is clicked")
    this.loginService.login(this.loginForm.value).subscribe(
      data => {
    console.log("login button is clicked")
    console.log(data)
        localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTmFkYSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiZDc1M2MyZTctNzJhZi00MTg4LTg4ZjEtYzBmYjFjZmI2YWYzIiwianRpIjoiMjgxYTI5MjAtMmVhNy00M2ViLThjNTMtYTZhNzE2MTEyYzU3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2NzAwMzIxNTAsImlzcyI6IioiLCJhdWQiOiIqIn0.BsIiNaeXbGJb9ioxy-KGbjAOTmjkT89RdwEjjOdWvGU');
        this.router.navigate(['/home']);
        setTimeout(() => {
          this.loginService.logOut();
        }, 18000000);
      },
      (err) => {
        (event.target as HTMLButtonElement).disabled = false;
        if (err.status == 401) {
          return this.loginService.logOut();
        }
        if (err instanceof TimeoutError) {
          this.requestTimeOut = true;
        }
      },
      () => {
        (event.target as HTMLButtonElement).disabled = false;
      }
    );
  }
}
