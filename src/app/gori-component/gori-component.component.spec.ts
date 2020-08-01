import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoriComponentComponent } from './gori-component.component';

describe('GoriComponentComponent', () => {
  let component: GoriComponentComponent;
  let fixture: ComponentFixture<GoriComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoriComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoriComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
