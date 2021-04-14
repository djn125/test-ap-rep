import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-regular-post',
  templateUrl: './regular-post.component.html',
  styleUrls: ['./regular-post.component.scss']
})
export class RegularPostComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
