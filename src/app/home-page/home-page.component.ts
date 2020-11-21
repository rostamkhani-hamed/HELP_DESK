import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { RestCaller } from '../rest-caller';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  rc: RestCaller;
  constructor(private httpclient: HttpClient , private router : Router) { }

  ngOnInit(): void {
    this.rc = new RestCaller(this.httpclient);
    var sessionVlaue = this.rc.callApi('GET','helpdesk/members/checkactivesession.zjs','');
    sessionVlaue.forEach(element => {
      if (element[0].ACTIVE == 'FALSE'){
        this.router.navigateByUrl('/LoginPage', { skipLocationChange: true });
      }
    });
  }
  

  goForCheckMobile(ref){
    this.router.navigateByUrl('/CheckMobile', { skipLocationChange: true });
    localStorage.setItem('refNo',ref);
  }
  goToLogin(){
    this.router.navigateByUrl('/LoginPage', { skipLocationChange: true });
  }

}
