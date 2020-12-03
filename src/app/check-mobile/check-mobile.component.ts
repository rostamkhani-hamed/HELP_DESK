import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestCaller } from '../rest-caller';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-check-mobile',
  templateUrl: './check-mobile.component.html',
  styleUrls: ['./check-mobile.component.css']
})
export class CheckMobileComponent implements OnInit {
  flag : boolean;
  rc: RestCaller;
  param = [];
  result;
  refNo;
  shopCashDeskCount = 0;
  constructor(private httpclient: HttpClient, private router: Router, private toast:ToastrService) { 
  }

  ngOnInit(): void {
    flag : Boolean;
    this.refNo = localStorage.getItem('refNo');
    this.rc = new RestCaller(this.httpclient);

    var sessionVlaue = this.rc.callApi('GET','helpdesk/members/checkactivesession.zjs','');
    sessionVlaue.forEach(element => {
      if (element[0].ACTIVE == 'FALSE'){
        this.router.navigateByUrl('/LoginPage', { skipLocationChange: true });
      };
    });
  }
  //=============================================================================================
  //******************************************************************************************* */
  //=============================================================================================
  showPersoneDetail(path: string, mobileNo: string) {
    this.flag = true;
    var apiResultForPersoneData;
    var json = { mobile: mobileNo };
    apiResultForPersoneData = this.rc.callApi('POST', path, json);
    apiResultForPersoneData.forEach(element => {
      this.showResultForMemberInfo(element);
    });
  }
  showResultForMemberInfo(elemnt) {
    this.flag = false;
    var arrayLenght = elemnt.length;
    for (var i = 0; i < arrayLenght; i++) {
      this.param[i] = elemnt[i];
    }
    this.result = Number(this.param[0].RESULT);
    console.log(this.result);
    if (this.result == 2) {
      // this.router.navigateByUrl('/GetMemberData', { skipLocationChange: true });
    }
    else {
      this.toast.error('شماره وارد شده، اشتباه است','',{
      });
    }

  }
  //=============================================================================================
  //******************************************************************************************* */
  //=============================================================================================
  goForUnblockingMember(path: string, tmid) {
    this.flag = true;
    var apiResultForUnblocking;
    var json = { tara_member_id: tmid };
    apiResultForUnblocking = this.rc.callApi('POST', path, json);
    apiResultForUnblocking.forEach(element => {
      this.showResultForUnblocking(element);
    });
  }
  showResultForUnblocking(elemnt) {
    this.flag = false;
    var param = [];
    var result;
    var arrayLenght = elemnt.length;

    for (var i = 0; i < arrayLenght; i++) {
      param[i] = elemnt[i];
    }
    result = Number(param[0].RESULT);

    if (result == 1) {
      this.toast.success('با موفقیت انجام شد','',{
      });
    }
    else {
      this.toast.error('بروز مشکل در رفع مسدودی کاربر','',{
      });
    }

  }

  //=============================================================================================
  //******************************************************************************************* */
  //=============================================================================================
  goForMemberPassSend(path: string, mobile) {
    this.flag = true;
    var apiResultForUnblocking;
    var json = { mobile_number: mobile };
    apiResultForUnblocking = this.rc.callApi('POST', path, json);
    apiResultForUnblocking.forEach(element => {
      this.showResultForMemberPassSend(element);
    });
  }
  showResultForMemberPassSend(elemnt) {
    this.flag = false;
    var param = [];
    var result;
    var arrayLenght = elemnt.length;
    for (var i = 0; i < arrayLenght; i++) {
      param[i] = elemnt[i];
    }
    result = Number(param[0].MESSAGE);

    if (result == 1) {
      this.toast.success('با موفقیت انجام شد','',{
      });
    }
    else {
      this.toast.error('بروز مشکل در ارسال رمز کاربر','',{
      });
    }
  }
  //=============================================================================================
  //******************************************************************************************* */
  //=============================================================================================
  showShopCash(path: string, mobileNo: string) {
    this.flag = true;
    var apiResultForPersoneData;
    var json = { mobile: mobileNo };
    apiResultForPersoneData = this.rc.callApi('POST', path, json);
    apiResultForPersoneData.forEach(element => {
      this.showResultForcashInfo(element);
    });
  }
  showResultForcashInfo(elemnt) {
    this.flag = false;
    var arrayLenght = elemnt.length;
    for (var i = 0; i < arrayLenght; i++) {
      this.param[i] = elemnt[i];
    }
    var msg;
    try {
      msg = elemnt[0].MSG.trim();
    } catch (e) { }

    if (arrayLenght > 0 && msg != "EXECUTE SUCCESS") {
      this.shopCashDeskCount = arrayLenght;
      // this.router.navigateByUrl('/GetMemberData', { skipLocationChange: true });
    }
    else {
      this.toast.error('شماره وارد شده اشتباه است','',{
      });
    }

  }
  //=============================================================================================
  //******************************************************************************************* */
  //=============================================================================================
  getShopInfo(path: string, casgDeskNo) {
    this.flag = true;
    var apiResultForPersoneData;
    var json = { cash_desk_no: casgDeskNo };
    apiResultForPersoneData = this.rc.callApi('POST', path, json);
    apiResultForPersoneData.forEach(element => {
      this.showForShopInfoByCashDeskNo(element);
    });
  }
  showForShopInfoByCashDeskNo(elemnt) {
    this.flag = false;
    var arrayLenght = elemnt.length;
    for (var i = 0; i < arrayLenght; i++) {
      this.param[i] = elemnt[i];
    }
    var msg;
    try {
      msg = elemnt[0].MSG.trim();
    } catch (e) { }

    if (arrayLenght > 0 && msg != "EXECUTE SUCCESS") {
      this.result = this.param[0].RESULT;

      // this.router.navigateByUrl('/GetMemberData', { skipLocationChange: true });
    }
    else {
      this.toast.error('بروز مشکل در گرفتن داده ها از سروز','',{
      });
    }
  }
  //=============================================================================================
  //******************************************************************************************* */
  //=============================================================================================
  goForShopPassSend(path: string, mobile , shopName) {
    this.flag = true;
    var apiResultForPersoneData;
    var json = { mobile: mobile , shopname : shopName };
    apiResultForPersoneData = this.rc.callApi('POST', path, json);
    apiResultForPersoneData.forEach(element => {
      this.showForShopPassSend(element);
    });
  }
  showForShopPassSend(elemnt) {
    this.flag = false;
    var arrayLenght = elemnt.length;
    for (var i = 0; i < arrayLenght; i++) {
      this.param[i] = elemnt[i];
    }
    var msg;
    try {
      msg = elemnt[0].MSG.trim();
    } catch (e) { }

    if (arrayLenght > 0 && msg != "EXECUTE SUCCESS" && this.param[0].RESULT == 1) {
      this.toast.success('ارسال رمز با موفقیت انجام شد','',{
      });
    }
    else {
      this.toast.error('بروز مشکل در گرفتن داده ها از سروز','',{
      });
    }
  }
  //=============================================================================================
  //******************************************************************************************* */
  //=============================================================================================
  goToHome(){
    this.router.navigateByUrl('/HomePage', { skipLocationChange: true });
  }
}



