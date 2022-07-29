import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-mattress',
  templateUrl: './mattress.component.html',
  styleUrls: ['./mattress.component.css']
})
export class MattressComponent implements OnInit {

  constructor(private myProductService:ProductService) { }

  CategoryId=1;
  products:any;

  ngOnInit(): void {
    this.myProductService.getProductByCategoryId(this.CategoryId).subscribe(
      (data)=>{this.products=data},
      (err)=>{console.log(err)}
    )
  }

}
