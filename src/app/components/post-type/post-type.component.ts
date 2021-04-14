import {Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef} from '@angular/core';
import {RegularPostComponent} from '../regular-post/regular-post.component';
import {MediaPostComponent} from '../media-post/media-post.component';


@Component({
  selector: 'app-post-type',
  templateUrl: './post-type.component.html',
  styleUrls: ['./post-type.component.scss']
})

export interface Post {
  name: string;
  desc: string;
  type: Types;
  imageLink: string;
}
export interface Types {
  'regular': RegularPostComponent;
  'media': MediaPostComponent;
}

export class PostTypeComponent implements OnInit {
  @Input() item: Post ;

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  types = {
    regular: RegularPostComponent,
    media: MediaPostComponent,
  };

  ngOnInit(): void {
    const type = RegularPostComponent;
    const factory = this.resolver.resolveComponentFactory(type);
    const component = factory.create(this.viewContainerRef.injector);
    component.instance['data'] = this.item;
    this.viewContainerRef.insert(component.hostView);
  }

}
