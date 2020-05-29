import { Component } from '@angular/core';
import {
  getSearchPhotosState,
  getSearchUsersState,
  fromFeed,
  getSearchState
} from '@app/feed/state';
import { Store } from '@ngrx/store';
import { Comment } from '@napho/data';

@Component({
  selector: 'napho-search-results-container',
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.scss']
})
export class SearchResultsContainerComponent {
  photos$ = this.store.select(getSearchPhotosState);
  users$ = this.store.select(getSearchUsersState);
  search$ = this.store.select(getSearchState);

  constructor(private store: Store<any>) {}

  createComment(comment: Comment) {
    this.store.dispatch(fromFeed.actions.createComment(comment));
  }

  sortSearchPhotos(field: string) {
    this.search$.subscribe(search =>
      this.store.dispatch(fromFeed.actions.getSearchPhotos({ search, field }))
    );
  }
}
