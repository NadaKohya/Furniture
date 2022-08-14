import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-categoriescrud',
  templateUrl: './categoriescrud.component.html',
  styleUrls: ['./categoriescrud.component.css']
})
export class CategoriescrudComponent implements OnInit {
  categories:any;
  categorytId:any;
  categoryt:any;
    constructor(private myCategoryService : CategoryService) { }
  
    ngOnInit(): void {
      this.myCategoryService.getAllCategories().subscribe(
        (data)=>{this.categories=data},
        (err)=>{console.log(err)}
      )
    }
  
    Delete(categoryId:any)
    {
      this.myCategoryService.deleteCategory(categoryId).subscribe(
        res=>{
          this.myCategoryService.getAllCategories();
          window.location.reload();
      })
    }

}
