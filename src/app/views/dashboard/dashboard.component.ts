import { Component, OnInit } from '@angular/core';
import {BoxType, WhiteBoxData} from '../../models/common.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  viewsData: WhiteBoxData = {
    name: 'Ostatnie sesje',
    description: '',
    ico: 'today',
    type: BoxType.white,
  };
  stateData: WhiteBoxData = {
    name: 'Ostatnie sesje',
    description: '',
    ico: 'apps',
    type: BoxType.outline,
  };



  constructor() { }

  ngOnInit(): void {
  }

}
