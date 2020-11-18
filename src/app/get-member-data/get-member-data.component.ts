import { Component, OnInit } from '@angular/core';
import {CheckMobileComponent} from '../check-mobile/check-mobile.component';
import { HttpClient } from '@angular/common/http';
import { RestCaller } from '../rest-caller';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-member-data',
  templateUrl: './get-member-data.component.html',
  styleUrls: ['./get-member-data.component.css']
})
export class GetMemberDataComponent implements OnInit {
  rc: RestCaller;
  constructor( public cm : CheckMobileComponent , private httpclient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    var el = document.getElementById("FirstDive");
    el.style.backgroundRepeat = "repeat-y";
    this.rc = new RestCaller(this.httpclient);

    var sessionVlaue = this.rc.callApi('GET','helpdesk/members/checkactivesession.zjs','');
    sessionVlaue.forEach(element => {
      if (element[0].ACTIVE == 'FALSE'){
        this.router.navigateByUrl('/LoginPage', { skipLocationChange: true });
      };
    });
  }

}
