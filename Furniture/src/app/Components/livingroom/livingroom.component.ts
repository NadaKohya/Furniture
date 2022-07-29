import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-livingroom',
  templateUrl: './livingroom.component.html',
  styleUrls: ['./livingroom.component.css']
})
export class LivingroomComponent implements OnInit {

  constructor(private myProductService:ProductService) { }
  
  CategoryId=2;
  products:any;

  ngOnInit(): void {
    this.myProductService.getProductByCategoryId(this.CategoryId).subscribe(
      (data)=>{this.products=data},
      (err)=>{console.log(err)}
    )
  }

}
