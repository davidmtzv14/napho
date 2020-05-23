import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaContainerComponent } from './spa-container.component';

describe('SpaContainerComponent', () => {
  let component: SpaContainerComponent;
  let fixture: ComponentFixture<SpaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
