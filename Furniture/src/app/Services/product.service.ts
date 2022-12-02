import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  URL=this.urlService.productURL

  constructor(private HttpClient:HttpClient, public urlService:UrlService) { }

    getAllProducts(){
      return this.HttpClient.get(this.URL);
    }
    getProductByID(id:any){
      return this.HttpClient.get(this.URL+"/"+id);
    }
    getProductByCategoryId(CategoryId:any){
      return this.HttpClient.get(`${this.URL}/category/${CategoryId}`)
    }
    addNewProduct(product:any){
      return this.HttpClient.post(this.URL, product);
    }
    updateProduct(id:any, product:any){
      return this.HttpClient.put(this.URL+"/"+id, product);
    }
    deleteProduct(id:any){
      return this.HttpClient.delete(this.URL+"/"+id);
    }
  
}
