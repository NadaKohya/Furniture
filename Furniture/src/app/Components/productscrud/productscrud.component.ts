import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-productscrud',
  templateUrl: './productscrud.component.html',
  styleUrls: ['./productscrud.component.css']
})
export class ProductscrudComponent implements OnInit {
  products:any;
productId:any;
product:any;
  constructor(private myProductService : ProductService) { }

  ngOnInit(): void {
    this.myProductService.getAllProducts().subscribe(
      (data)=>{this.products=data},
      (err)=>{console.log(err)}
    )
  }

  Delete(productId:any)
  {
    this.myProductService.deleteProduct(productId).subscribe(
      res=>{
        this.myProductService.getAllProducts();
        window.location.reload();
    })
  }

}
