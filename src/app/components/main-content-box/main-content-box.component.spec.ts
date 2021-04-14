import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentBox } from './main-content-box.component';

describe('LastViewsComponent', () => {
  let component: MainContentBox;
  let fixture: ComponentFixture<MainContentBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentBox ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
