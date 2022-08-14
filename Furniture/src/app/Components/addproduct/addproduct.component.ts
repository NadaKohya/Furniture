import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

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
  OnSelect(event: any) {
    this.image1 = event.target.files[0].name;
  }

  changeCat(e: any) {
    this.categoryId = e.target.value;
    console.log(this.categoryId);
  }
}
