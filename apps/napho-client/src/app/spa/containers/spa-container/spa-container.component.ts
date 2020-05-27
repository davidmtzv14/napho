import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromAuth } from '@app/auth/state';

@Component({
  selector: 'napho-spa-container',
  templateUrl: './spa-container.component.html',
  styleUrls: ['./spa-container.component.scss']
})
export class SpaContainerComponent {
  constructor(private router: Router, private store: Store<any>) {}

  onSearchChange(value) {
    console.log('navigate', this.router);
    this.router.navigateByUrl('/spa/home/search-results');
  }

  logout() {
    this.store.dispatch(fromAuth.actions.logout());
  }
}
