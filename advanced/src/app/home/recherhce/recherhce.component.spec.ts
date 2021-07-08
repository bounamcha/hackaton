import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherhceComponent } from './recherhce.component';

describe('RecherhceComponent', () => {
  let component: RecherhceComponent;
  let fixture: ComponentFixture<RecherhceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherhceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherhceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
