import { Component, OnInit } from '@angular/core';
import {MemberUnblockingComponent} from '../member-unblocking/member-unblocking.component';

@Component({
  selector: 'app-get-member-data',
  templateUrl: './get-member-data.component.html',
  styleUrls: ['./get-member-data.component.css']
})
export class GetMemberDataComponent implements OnInit {

  constructor(private muc : MemberUnblockingComponent) { }

  ngOnInit(): void {
  }

}
