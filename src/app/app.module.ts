import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { GetMemberDataComponent } from './get-member-data/get-member-data.component';
import { CheckMobileComponent } from './check-mobile/check-mobile.component';
import { GetShopDataComponent } from './get-shop-data/get-shop-data.component';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { ValidationPageComponent } from './validation-page/validation-page.component';









@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    GetMemberDataComponent,
    CheckMobileComponent,
    GetShopDataComponent,
    ValidationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
      closeButton : false
    })
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
