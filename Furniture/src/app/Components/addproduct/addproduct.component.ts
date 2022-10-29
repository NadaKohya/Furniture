import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { CategoryService } from 'src/app/Services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  produuctId: any;
  product: any;
  image1: any;
  image2: any;
  image3: any;
  categoryId: any;
  categories: any;

  constructor(
    private activited: ActivatedRoute,
    private myCategoryService: CategoryService
  ) {
    this.produuctId = activited.snapshot.params['id'];
  }

  
  ngOnInit(): void {
    this.myCategoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {
        console.log(err);
      }
      );
    }

    productForm =new FormGroup({
      name:new FormControl("",[Validators.required]),
      price:new FormControl(null,[Validators.required]),
      category:new FormControl(null,[Validators.required]),
      description:new FormControl(""),
      bestSelling:new FormControl(false),
      image1:new FormControl()
    })

    get name(){
     return this.productForm.get('name');
    }

    get price(){
      return this.productForm.get('price');
     }

     get category(){
      return this.productForm.get('category');
     }

     get description(){
      return this.productForm.get('description');
     }

     get bestSelling(){
      return this.productForm.get('bestSelling');
     }

     get formImage1(){
      return this.productForm.get('image1');
     }

  OnSelect(event: any) {
    this.image1 = event.target.files[0].name;
  }

  changeCat(e: any) {
    this.categoryId = e.target.value;
    console.log(this.categoryId);
  }
}
