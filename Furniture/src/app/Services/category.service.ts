import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HttpClient:HttpClient) { }
  private BaseURL="http://localhost:5171/api/Category"

    getAllCategories(){
      return this.HttpClient.get(this.BaseURL);
    }
    getCategoryByID(id:any){
      return this.HttpClient.get(this.BaseURL+"/"+id);
    }
    addNewCategory(Category:any){
      return this.HttpClient.post(this.BaseURL, Category);
    }
    updateCategory(id:any, Category:any){
      return this.HttpClient.put(this.BaseURL+"/"+id, Category);
    }
    deleteCategory(id:any){
      return this.HttpClient.delete(this.BaseURL+"/"+id);
    }
}
