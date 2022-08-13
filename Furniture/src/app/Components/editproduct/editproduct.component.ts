import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
product:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

  

}
