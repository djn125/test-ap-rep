import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-post',
  templateUrl: './media-post.component.html',
  styleUrls: ['./media-post.component.scss']
})
export class MediaPostComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
