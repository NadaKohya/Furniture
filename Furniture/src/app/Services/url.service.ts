import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

baseURL='http://localhost:5171'
productURL=`${this.baseURL}/api/Product`
categoryURL=`${this.baseURL}/api/Category`
loginURL=`${this.baseURL}/api/Account/login`

  constructor() { }
}
