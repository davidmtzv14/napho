import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProfilePhotosState, getProfileFavPhotosState, getProfileUserState } from '@app/profile/state';

@Component({
  selector: 'napho-search-profile-container',
  templateUrl: './search-profile-container.component.html',
  styleUrls: ['./search-profile-container.component.scss']
})
export class SearchProfileContainerComponent {
  userProfile$ = this.store.select(getProfileUserState);
  photos$ = this.store.select(getProfilePhotosState);
  favPhotos$ = this.store.select(getProfileFavPhotosState);

  constructor(public store: Store<any>) {}
}
