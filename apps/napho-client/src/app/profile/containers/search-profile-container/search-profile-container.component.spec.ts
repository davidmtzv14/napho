import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfileContainerComponent } from './search-profile-container.component';

describe('SearchProfileContainerComponent', () => {
  let component: SearchProfileContainerComponent;
  let fixture: ComponentFixture<SearchProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProfileContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
