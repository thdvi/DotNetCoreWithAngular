import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import { SlideshowModule } from 'ng-simple-slideshow';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BannerProductComponent } from './banner-product/banner-product.component';
import { CardProductComponent } from './card-product/card-product.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SlideshowComponent,
    HomeComponent,
    BannerProductComponent,
    CardProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    SlideshowModule,
    MatTreeModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
    MatCardModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
