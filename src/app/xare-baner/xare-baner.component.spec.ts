import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XareBanerComponent } from './xare-baner.component';

describe('XareBanerComponent', () => {
  let component: XareBanerComponent;
  let fixture: ComponentFixture<XareBanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XareBanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XareBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
