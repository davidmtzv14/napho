import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountFormContainerComponent } from './create-account-form-container.component';

describe('CreateAccountFormContainerComponent', () => {
  let component: CreateAccountFormContainerComponent;
  let fixture: ComponentFixture<CreateAccountFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
