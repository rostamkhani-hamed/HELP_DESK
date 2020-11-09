import { Component, OnInit } from '@angular/core';
import {CheckMobileComponent} from '../check-mobile/check-mobile.component';

@Component({
  selector: 'app-get-member-data',
  templateUrl: './get-member-data.component.html',
  styleUrls: ['./get-member-data.component.css']
})
export class GetMemberDataComponent implements OnInit {

  constructor( public cm : CheckMobileComponent) { }

  ngOnInit(): void {
  }

}
