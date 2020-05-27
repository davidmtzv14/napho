import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Photo } from '@napho/data';
import { fromFeed, getFeedPhotosState } from '@app/feed/state';

@Component({
  selector: 'napho-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {
  photos$ = this.store.select(getFeedPhotosState);

  constructor(private store: Store<any>) {}

  submit(photo: Partial<Photo>): void {
    this.store.dispatch(fromFeed.actions.createPhoto({ photo }));
  }

}
