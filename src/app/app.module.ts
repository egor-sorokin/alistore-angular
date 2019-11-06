import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from './material.module';
import { CartComponent } from './cart/cart.component';
import { ContentComponent } from './content/content.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PriceFilterPipe } from '../common/filters/price-filter.pipe';
import { CategoryFilterPipe } from '../common/filters/category-filter.pipe';
import { SearchFilterPipe } from '../common/filters/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SearchBarComponent,
    ProductsComponent,
    CartComponent,
    ContentComponent,
    ProductDetailsComponent,
    PriceFilterPipe,
    CategoryFilterPipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: ContentComponent },
      { path: 'cart', component: CartComponent },
      { path: 'products/:productId', component: ProductDetailsComponent }
    ]),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
