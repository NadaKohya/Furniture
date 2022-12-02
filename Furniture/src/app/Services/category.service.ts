import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URL=this.urlService.categoryURL;

  constructor(private HttpClient:HttpClient, public urlService:UrlService) { }

    getAllCategories(){
      return this.HttpClient.get(this.URL);
    }
    getCategoryByID(id:any){
      return this.HttpClient.get(this.URL+"/"+id);
    }
    addNewCategory(Category:any){
      return this.HttpClient.post(this.URL, Category);
    }
    updateCategory(id:any, Category:any){
      return this.HttpClient.put(this.URL+"/"+id, Category);
    }
    deleteCategory(id:any){
      return this.HttpClient.delete(this.URL+"/"+id);
    }
}
