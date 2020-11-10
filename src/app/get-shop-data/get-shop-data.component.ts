import { Component, OnInit } from '@angular/core';
import {CheckMobileComponent} from '../check-mobile/check-mobile.component';

@Component({
  selector: 'app-get-shop-data',
  templateUrl: './get-shop-data.component.html',
  styleUrls: ['./get-shop-data.component.css']
})
export class GetShopDataComponent implements OnInit {

  constructor(public cm : CheckMobileComponent) { }

  ngOnInit(): void {
  }

}
