import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
})
export class EditproductComponent implements OnInit {
  produuctId: any;
  product: any;
  image1: any;
  image2: any;
  image3: any;
  categoryId: any;
  categories: any;

  constructor(
    private activited: ActivatedRoute,
    private myProductService: ProductService,
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
    this.myProductService
      .getProductByID(this.activited.snapshot.params['id'])
      .subscribe(
        (data) => {
          this.product = data;
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

  Update(
    name: any,
    price: any,
    description: any,
    categoryId: any,
    image1: any,
    best:any
  ) {
    let product = { name, price, description, categoryId, image1,best };
    product.image1 = '../../../assets/' + this.image1;
    product.categoryId = this.categoryId;
    console.log(product);
    this.myProductService.updateProduct(this.produuctId, product).subscribe();
  }
}
