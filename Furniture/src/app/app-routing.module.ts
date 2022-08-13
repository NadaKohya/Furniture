import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AddproductComponent } from './Components/addproduct/addproduct.component';
import { CategoriescrudComponent } from './Components/categoriescrud/categoriescrud.component';
import { DinningComponent } from './Components/dinning/dinning.component';
import { HomeComponent } from './Components/home/home.component';
import { LivingroomComponent } from './Components/livingroom/livingroom.component';
import { MattressComponent } from './Components/mattress/mattress.component';
import { OfficeComponent } from './Components/office/office.component';
import { OuterPageComponent } from './Components/outer-page/outer-page.component';
import { ProductscrudComponent } from './Components/productscrud/productscrud.component';

const routes: Routes = [
  {path:"login",component:OuterPageComponent},
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"home/mattress",component:MattressComponent},
  {path:"home/livingroom",component:LivingroomComponent},
  {path:"home/dinning",component:DinningComponent},
  {path:"home/office",component:OfficeComponent},
  {path:"home/aboutus",component:AboutusComponent},
  {path:"home/productscrud",component:ProductscrudComponent},
  {path:"home/categoriescrud",component:CategoriescrudComponent},
  {path:'productscrud/addproduct',component:AddproductComponent},
  {path:'productscrud/edit/:id',component:AddproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
