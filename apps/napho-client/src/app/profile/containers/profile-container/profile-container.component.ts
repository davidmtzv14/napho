import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuthUserState } from '@app/auth/state';
import {
  getProfilePhotosState,
  getProfileFavPhotosState,
  getUserFollowersState,
  getUserFollowingState
} from '@app/profile/state';

@Component({
  selector: 'napho-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent {
  userProfile$ = this.store.select(getAuthUserState);
  photos$ = this.store.select(getProfilePhotosState);
  favPhotos$ = this.store.select(getProfileFavPhotosState);
  followers$ = this.store.select(getUserFollowersState);
  following$ = this.store.select(getUserFollowingState);

  constructor(public store: Store<any>) {}
}
