import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedServicesComponent } from './components/featured-services/featured-services.component';
import { NewServicesComponent } from './components/new-services/new-services.component';
import { NewsLettersComponent } from './components/news-letters/news-letters.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BestSellerComponent,
    BlogsComponent,
    CarouselComponent,
    CategoriesComponent,
    FeaturedServicesComponent,
    NewServicesComponent,
    NewsLettersComponent,
    SpecialOffersComponent,
    NewArrivalsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
