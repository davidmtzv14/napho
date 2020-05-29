import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getProfilePhotosState,
  getProfileFavPhotosState,
  getUserFollowersState,
  getUserFollowingState,
  fromProfile,
  getProfileUserState
} from '@app/profile/state';
import { fromFeed } from '@app/feed/state';
import { Comment, User } from '@napho/data';

@Component({
  selector: 'napho-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent {
  userProfile$ = this.store.select(getProfileUserState);
  photos$ = this.store.select(getProfilePhotosState);
  favPhotos$ = this.store.select(getProfileFavPhotosState);
  followers$ = this.store.select(getUserFollowersState);
  following$ = this.store.select(getUserFollowingState);

  constructor(public store: Store<any>) {}

  createComment(comment: Comment) {
    this.store.dispatch(fromFeed.actions.createComment(comment));
  }

  updateProfile(user: Partial<User>) {
    this.store.dispatch(fromProfile.actions.updateProfile({ user }));
  }
}
