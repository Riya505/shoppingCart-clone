import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

const appRoutes:Routes=[
  {
    path:"",component:CartComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
