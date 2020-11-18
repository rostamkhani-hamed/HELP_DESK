import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestCaller} from '../rest-caller'
import {loginData} from '../Classes/loginResult'
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'] 
  
})
export class LoginPageComponent implements OnInit {
rc : RestCaller;
ld : loginData;
rs : number;
  constructor(public hc : HttpClient , private router: Router){

  }
  

  ngOnInit(): void {
    this.rc = new RestCaller(this.hc);
    this.ld = new loginData();

    this.rc.callApi('GET','helpdesk/members/logout.zjs','').forEach(element => {});
  }
  onSubmit() {  
    this.router.navigateByUrl('/HomePage', { skipLocationChange: true });
} 

  callLoginService(username:string , password:string){

    var apiResult;
    var jsonParam =  {  username: username  , password: password } ;

    apiResult = this.rc.callApi('POST','member/loginuser.zjs', jsonParam);    

    apiResult.forEach(element => {  
      this.showResult(element);
            });

    // result = this.rc.params;

    // var len = result.length;

    // this.rs = Number(result['message']);
    // console.log(len);
    // if (this.rs > 0){
    //   alert('Login Success');
    // }else{
    //   alert('Login Failed');
    // }
                      
  }
  calltestGetservice(path:string){ 
    var apiResult;
    apiResult = this.rc.callApi('GET',path,'');
    apiResult.forEach(element => {  
      console.log(element);
            });
  }
  showResult(result){
    var param = [];
    var arrayLenght = result.length;
    for( var i = 0 ; i < arrayLenght ; i++){
        param[i] = result[i];
    }
    var messageValue = Number(param[0].message);
    if (messageValue > 0){
        alert('Login Success');
        this.onSubmit();
      }else{
        alert('Login Failed');
      } 

}


}


