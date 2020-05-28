import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPostContainerComponent } from './photo-post-container.component';

describe('PhotoPostContainerComponent', () => {
  let component: PhotoPostContainerComponent;
  let fixture: ComponentFixture<PhotoPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
