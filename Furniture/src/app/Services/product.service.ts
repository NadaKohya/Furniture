import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  URL=this.urlService.productURL

  constructor(
    private HttpClient:HttpClient,
    public urlService:UrlService,
    public loginService:LoginService
    ) { }

    httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:`Bearer $this.loginService.getToken()`
      })
    }

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
      return this.HttpClient.post(this.URL, product, this.httpOptions);
    }
    updateProduct(id:any, product:any){
      return this.HttpClient.put(this.URL+"/"+id, product), this.httpOptions;
    }
    deleteProduct(id:any){
      return this.HttpClient.delete(this.URL+"/"+id, this.httpOptions);
    }
  
}
