import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { DinningComponent } from './Components/dinning/dinning.component';
import { HomeComponent } from './Components/home/home.component';
import { LivingroomComponent } from './Components/livingroom/livingroom.component';
import { MattressComponent } from './Components/mattress/mattress.component';
import { OfficeComponent } from './Components/office/office.component';
import { OuterPageComponent } from './Components/outer-page/outer-page.component';

const routes: Routes = [
  {path:"",redirectTo:"outer",pathMatch:"full"},
  {path:"outer",component:OuterPageComponent},
  {path:"outer/home",component:HomeComponent},
  {path:"outer/mattress",component:MattressComponent},
  {path:"outer/livingroom",component:LivingroomComponent},
  {path:"outer/dinning",component:DinningComponent},
  {path:"outer/office",component:OfficeComponent},
  {path:"outer/aboutus",component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
