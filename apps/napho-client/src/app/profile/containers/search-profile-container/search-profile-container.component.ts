import { Component, OnInit } from '@angular/core';
import { getProfileUserState } from '@app/feed/state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'napho-search-profile-container',
  templateUrl: './search-profile-container.component.html',
  styleUrls: ['./search-profile-container.component.scss']
})
export class SearchProfileContainerComponent {
  userProfile$ = this.store.select(getProfileUserState);
  constructor(public store: Store<any>) {}
}
