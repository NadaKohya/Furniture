import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoryForm=new FormGroup({
    name:new FormControl("",[Validators.required])
  })

  get name(){
    return this.categoryForm.get('name')
  }
}
