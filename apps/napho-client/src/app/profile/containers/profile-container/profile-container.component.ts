import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuthUserState } from '@app/auth/state';
import { getProfilePhotosState, getProfileFavPhotosState } from '@app/profile/state';

@Component({
  selector: 'napho-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent {
  userProfile$ = this.store.select(getAuthUserState);
  photos$ = this.store.select(getProfilePhotosState);
  favPhotos$ = this.store.select(getProfileFavPhotosState);
  constructor(public store: Store<any>) {}
}
