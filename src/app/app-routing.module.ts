import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MemberUnblockingComponent } from './member-unblocking/member-unblocking.component';
import { GetMemberDataComponent } from './get-member-data/get-member-data.component';

const routes: Routes = 
[

  { path: '', component: LoginPageComponent   }
  ,
  { path: 'LoginPage', component: LoginPageComponent   }
  ,
  { path: 'HomePage', component: HomePageComponent }
  ,
  { path: 'MemberUnblocking', component: MemberUnblockingComponent }
  ,
  { path: 'GetMemberData', component: GetMemberDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
