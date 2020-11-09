import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GetMemberDataComponent } from './get-member-data/get-member-data.component';
import { CheckMobileComponent } from './check-mobile/check-mobile.component';

const routes: Routes = 
[

  { path: '', component: LoginPageComponent   }
  ,
  { path: 'LoginPage', component: LoginPageComponent   }
  ,
  { path: 'HomePage', component: HomePageComponent }
  ,
  { path: 'GetMemberData', component: GetMemberDataComponent }
  ,
  { path: 'CheckMobile', component: CheckMobileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
