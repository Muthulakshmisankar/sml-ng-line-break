import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmlNgLineBreakComponent } from './sml-ng-line-break.component';

describe('SmlNgLineBreakComponent', () => {
  let component: SmlNgLineBreakComponent;
  let fixture: ComponentFixture<SmlNgLineBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmlNgLineBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmlNgLineBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
