import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

productId:any;
product:any;

  constructor(private activatedRoute:ActivatedRoute, private myProductService:ProductService) { }

  ngOnInit(): void {
    this.productId=Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.myProductService.getProductByID(this.productId).subscribe(
(data)=>{this.product=data},
(err)=>{console.log(err)}
    );
  }

}
