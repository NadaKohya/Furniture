import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css']
})
export class BestSellingComponent implements OnInit {

  constructor(private myProductService:ProductService, private myCategoryService:CategoryService) { }

  Products:any;
  Categories:any;
  id:any;

  ngOnInit(): void {
    this.myProductService.getAllProducts().subscribe(
      (data)=>{this.Products=data},
      (err)=>{console.log(err)}
    )
  }
  
   
}
