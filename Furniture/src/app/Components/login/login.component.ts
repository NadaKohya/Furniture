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
    Password: new FormControl('', Validators.required)
  });

  get Name() {
    return this.loginForm.get('UserName');
  }

  get Password() {
    return this.loginForm.get('Password');
  }

  login(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.loginForm.valid)
    this.loginService.login(this.loginForm.value).subscribe(
      data => {
    this.loginService.setToken(data);
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
