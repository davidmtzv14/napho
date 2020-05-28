import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getProfilePhotosState,
  getProfileFavPhotosState,
  getProfileUserState,
  fromProfile,
  getUserFollowersState,
  getUserFollowingState
} from '@app/profile/state';
import { fromFeed } from '@app/feed/state';
import { Comment } from '@napho/data';

@Component({
  selector: 'napho-search-profile-container',
  templateUrl: './search-profile-container.component.html',
  styleUrls: ['./search-profile-container.component.scss']
})
export class SearchProfileContainerComponent {
  userProfile$ = this.store.select(getProfileUserState);
  photos$ = this.store.select(getProfilePhotosState);
  favPhotos$ = this.store.select(getProfileFavPhotosState);
  followers$ = this.store.select(getUserFollowersState);
  following$ = this.store.select(getUserFollowingState);

  constructor(public store: Store<any>) {}

  followUser(id: number): void {
    this.store.dispatch(fromProfile.actions.followUser({ id }));
  }

  createComment(comment: Comment) {
    this.store.dispatch(fromFeed.actions.createComment(comment));
  }
}
