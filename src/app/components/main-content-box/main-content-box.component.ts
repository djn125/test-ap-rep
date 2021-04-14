import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {WhiteBoxData} from '../../models/common.model';

@Component({
  selector: 'app-main-content-box',
  templateUrl: './main-content-box.component.html',
  styleUrls: ['./main-content-box.component.scss']
})
export class MainContentBoxComponent implements OnInit, AfterViewInit {
  @Input()
  boxData!: WhiteBoxData;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
