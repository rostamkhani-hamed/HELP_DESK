import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelpDesk';
  
}

export class getIp{
  constructor (){
    this.url = '172.30.21.35:9005/TARAETEBAR/';
  }
  set url(url){
    this.url = url;
  }
  get url(){
    return this.url;
  }
}