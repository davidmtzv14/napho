import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo, Comment } from '@napho/data';
import { getAuthUserState } from '@app/auth/state';
import { Store } from '@ngrx/store';
import { fromFeed } from '@app/feed/state';

@Component({
  selector: 'napho-photo-post-container',
  templateUrl: './photo-post-container.component.html',
  styleUrls: ['./photo-post-container.component.scss']
})
export class PhotoPostContainerComponent {
  @Input() photo: Photo;
  @Output() createComment = new EventEmitter<Comment>();
  user$ = this.store.select(getAuthUserState);

  constructor(public store: Store<any>) {}

  updateCommentStatus(comment: Partial<Comment>) {
    this.store.dispatch(fromFeed.actions.updateCommentStatus({ comment }));
  }

  updatePhotoFavorite(id: number) {
    this.store.dispatch(fromFeed.actions.updatePhotoFavorite({ id }));
  }
}
