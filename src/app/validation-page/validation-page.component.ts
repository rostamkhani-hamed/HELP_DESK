import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestCaller} from '../rest-caller'
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validation-page',
  templateUrl: './validation-page.component.html',
  styleUrls: ['./validation-page.component.css']
})
export class ValidationPageComponent implements OnInit {
  rc : RestCaller;
  captcha : string;
  constructor(public hc : HttpClient , private router: Router , private toast:ToastrService) { }

  ngOnInit(): void {
    this.rc = new RestCaller(this.hc);
    var sessionVlaue = this.rc.callApi('GET','helpdesk/members/checkactivesession.zjs','');
    sessionVlaue.forEach(element => {
      if (element[0].ACTIVE == 'FALSE'){
        this.router.navigateByUrl('/LoginPage', { skipLocationChange: true });
      }
    });
    var apiResult;
    apiResult = this.rc.callApi('GET','helpdesk/security/setcaptcha.zjs','');
    apiResult.forEach(element => {this.getCaptcha(element)});
  }
  
  getCaptcha(result){
    var param = [];
    var arrayLenght = result.length;
    for( var i = 0 ; i < arrayLenght ; i++){
        param[i] = result[i];
    }
    this.captcha = param[0].CAPTCHA;
}
goAndCheckValidationData(captcha , otp){
  var json = {otpvalue : otp , captchavalue : captcha}; 
  var apiResult;
    apiResult = this.rc.callApi('POST','helpdesk/security/checkloginvalidation.zjs', json);
    apiResult.forEach(element => {this.validating(element)});
}
validating(result){
  var param = [];
  var arrayLenght = result.length;
  for( var i = 0 ; i < arrayLenght ; i++){
      param[i] = result[i];
  }
  if (param[0].VALIDATION != "OK"){
    this.toast.error('اطلاعات وارد شده نادرست است');
  }
  else{
    this.router.navigateByUrl('/HomePage', { skipLocationChange: true });
  }
}

}
