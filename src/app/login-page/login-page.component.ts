import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestCaller} from '../rest-caller'
import {loginData} from '../Classes/loginResult'



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'] 
  
})
export class LoginPageComponent implements OnInit {
rc : RestCaller;
ld : loginData;
rs : number;

  constructor(public hc : HttpClient){

  }
  

  ngOnInit(): void {
    this.rc = new RestCaller(this.hc);
    this.ld = new loginData();
  }

  callLoginService(username:string , password:string){
    var result = [];
    var jsonParam =  {  username: username  , password: password } ;
    this.rc.callPostApi('member/loginuser.zjs', jsonParam);    
    result = this.rc.param;
    this.rs = Number(result['message']);
    if (this.rs > 0){
      alert('Login Success');
    }else{
      alert('Login Failed');
    }
                      
  }


}


