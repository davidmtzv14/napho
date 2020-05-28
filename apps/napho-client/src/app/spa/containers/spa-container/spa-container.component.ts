import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromAuth } from '@app/auth/state';
import { fromFeed } from '@app/feed/state';

@Component({
  selector: 'napho-spa-container',
  templateUrl: './spa-container.component.html',
  styleUrls: ['./spa-container.component.scss']
})
export class SpaContainerComponent {
  constructor(private router: Router, private store: Store<any>) {}

  onSearchChange(search) {
    this.store.dispatch(fromFeed.actions.getSearchUsers({ search }));
    this.store.dispatch(fromFeed.actions.getSearchPhotos({ search }));
    this.router.navigateByUrl('/spa/home/search-results');
  }

  logout() {
    this.store.dispatch(fromAuth.actions.logout());
  }
}
