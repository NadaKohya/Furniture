import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { OuterPageComponent } from './Components/outer-page/outer-page.component';
import { HomeComponent } from './Components/home/home.component';
import { MattressComponent } from './Components/mattress/mattress.component';
import { LivingroomComponent } from './Components/livingroom/livingroom.component';
import { DinningComponent } from './Components/dinning/dinning.component';
import { OfficeComponent } from './Components/office/office.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { HeaderEntireComponent } from './header-entire/header-entire.component';
import { BestSellingComponent } from './Components/best-selling/best-selling.component';
import { BestItemComponent } from './Components/best-item/best-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './Services/product.service';
import { CategoryService } from './Services/category.service';
import { InteriorComponent } from './Components/interior/interior.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StyleHomeComponent } from './Components/style-home/style-home.component';
import { ItemCardComponent } from './Components/item-card/item-card.component';
import { TeamCardComponent } from './Components/team-card/team-card.component';
import { ProductscrudComponent } from './Components/productscrud/productscrud.component';
import { CategoriescrudComponent } from './Components/categoriescrud/categoriescrud.component';
import { EditproductComponent } from './Components/editproduct/editproduct.component';
import { AddproductComponent } from './Components/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OuterPageComponent,
    HomeComponent,
    MattressComponent,
    LivingroomComponent,
    DinningComponent,
    OfficeComponent,
    AboutusComponent,
    HeaderEntireComponent,
    BestSellingComponent,
    BestItemComponent,
    InteriorComponent,
    FooterComponent,
    StyleHomeComponent,
    ItemCardComponent,
    TeamCardComponent,
    ProductscrudComponent,
    CategoriescrudComponent,
    EditproductComponent,
    AddproductComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ProductService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
