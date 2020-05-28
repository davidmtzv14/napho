import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Photo, Comment } from '@napho/data';
import { fromFeed, getFeedPhotosState } from '@app/feed/state';

@Component({
  selector: 'napho-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {
  photos$ = this.store.select(getFeedPhotosState);

  constructor(private store: Store<any>) {}

  createComment(comment: Comment) {
    this.store.dispatch(fromFeed.actions.createComment(comment));
  }

  createPhoto(photo: Partial<Photo>): void {
    this.store.dispatch(fromFeed.actions.createPhoto({ photo }));
  }
}
