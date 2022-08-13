import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outer-page',
  templateUrl: './outer-page.component.html',
  styleUrls: ['./outer-page.component.css']
})
export class OuterPageComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor() {}
  ngOnInit(): void {
  }

}
