import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AddproductComponent } from './Components/addproduct/addproduct.component';
import { CategoriescrudComponent } from './Components/categoriescrud/categoriescrud.component';
import { DinningComponent } from './Components/dinning/dinning.component';
import { EditcategoryComponent } from './Components/editcategory/editcategory.component';
import { EditproductComponent } from './Components/editproduct/editproduct.component';
import { HomeComponent } from './Components/home/home.component';
import { LivingroomComponent } from './Components/livingroom/livingroom.component';
import { LoginComponent } from './Components/login/login.component';
import { MattressComponent } from './Components/mattress/mattress.component';
import { NewcategoryComponent } from './Components/newcategory/newcategory.component';
import { NotfoundpageComponent } from './Components/notfoundpage/notfoundpage.component';
import { OfficeComponent } from './Components/office/office.component';
import { OtherslayoutComponent } from './Components/otherslayout/otherslayout.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { ProductscrudComponent } from './Components/productscrud/productscrud.component';
import { AuthenticationGuard } from './Gaurds/authentication.guard';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"",component:OtherslayoutComponent,children:[
    {path:"home/mattress",component:MattressComponent},
    {path:"home/livingroom",component:LivingroomComponent},
    {path:"home/dinning",component:DinningComponent},
    {path:"home/office",component:OfficeComponent},
    {path:"home/aboutus",component:AboutusComponent},
    {path:"home/productscrud",component:ProductscrudComponent, canActivate:[AuthenticationGuard]},
    {path:"home/categoriescrud",component:CategoriescrudComponent, canActivate:[AuthenticationGuard]},
    {path:'newproduct',component:AddproductComponent, canActivate:[AuthenticationGuard]},
    {path:'newcategory',component:NewcategoryComponent, canActivate:[AuthenticationGuard]},
    {path:'editproduct/:id',component:EditproductComponent, canActivate:[AuthenticationGuard]},
    {path:'editcategory/:id',component:EditcategoryComponent, canActivate:[AuthenticationGuard]},
    {path:'product/:id',component:ProductdetailsComponent},
    {path:'**',component:NotfoundpageComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
