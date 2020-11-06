import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {RestCaller} from '../rest-caller';

@Component({
  selector: 'app-member-unblocking',
  templateUrl: './member-unblocking.component.html',
  styleUrls: ['./member-unblocking.component.css']
})
export class MemberUnblockingComponent implements OnInit {
rc : RestCaller;
param = [];
result ;
  constructor( private httpclient:HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.rc = new RestCaller(this.httpclient);
  }
  showPersoneDetail(path:string , mobileNo:string){
    var apiResultForPersoneData;
    var json = { mobile : mobileNo};
    apiResultForPersoneData = this.rc.callApi ('POST',path,json);
    apiResultForPersoneData.forEach(element => {this.showResultForMemberInfo(element);
            });
  }
  goForUnblockingMember(path:string , tmid){
    var apiResultForUnblocking;
    var json = { tara_member_id : tmid};
    apiResultForUnblocking = this.rc.callApi ('POST',path,json);
    apiResultForUnblocking.forEach(element => {this.showResultForUnblocking(element);
            });
  }
  showResultForMemberInfo(elemnt){
    
    var arrayLenght = elemnt.length;
    for( var i = 0 ; i < arrayLenght ; i++){
        this.param[i] = elemnt[i];
    }
    this.result = Number(this.param[0].RESULT);
    console.log(this.result);
    if ( this.result == 2){
      // this.router.navigateByUrl('/GetMemberData', { skipLocationChange: true });
    }
    else {
      alert('شماره وارد شده، اشتباه است');
    }
    
  }
  showResultForUnblocking(elemnt){
    var param = [];
    var result;
    var arrayLenght = elemnt.length;
    for( var i = 0 ; i < arrayLenght ; i++){
        param[i] = elemnt[i];
    }
    result = Number(param[0].RESULT);

    if ( result == 1){
      alert('با موفقیت انجام شد');
    }
    else {
      alert('بروز مشکل در رفع مسدودی کاربر');
    }
    
  }

}
