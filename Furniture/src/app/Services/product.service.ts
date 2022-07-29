import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BaseURL="http://localhost:5171/api/Product"
  
  constructor(private HttpClient:HttpClient) { }

    getAllProducts(){
      return this.HttpClient.get(this.BaseURL);
    }
    getProductByID(id:any){
      return this.HttpClient.get(this.BaseURL+"/"+id);
    }
    getProductByCategoryId(CategoryId:any){
      return this.HttpClient.get(`${this.BaseURL}/category/${CategoryId}`)
    }
    addNewProduct(product:any){
      return this.HttpClient.post(this.BaseURL, product);
    }
    updateProduct(id:any, product:any){
      return this.HttpClient.put(this.BaseURL+"/"+id, product);
    }
    deleteProduct(id:any){
      return this.HttpClient.delete(this.BaseURL+"/"+id);
    }
  
}
