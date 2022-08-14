import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

 categoryId: any;
  category: any;

  constructor(
    private activited: ActivatedRoute,
    private myCategoryService: CategoryService
  ) {
    this.categoryId = activited.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.myCategoryService
    .getCategoryByID(this.activited.snapshot.params['id'])
    .subscribe(
      (data) => {
        this.category = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  Update(
    name: any,
  ) {
    let categoryName = { name};
    console.log(categoryName);
    this.myCategoryService.updateCategory(this.categoryId, categoryName).subscribe();
  }

}
