import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontsComponent } from './ponts.component';

describe('PontsComponent', () => {
  let component: PontsComponent;
  let fixture: ComponentFixture<PontsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
