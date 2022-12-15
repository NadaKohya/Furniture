import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
private name$=new BehaviorSubject<string>("");
private role$=new BehaviorSubject<string>("");
  constructor() { }
}
