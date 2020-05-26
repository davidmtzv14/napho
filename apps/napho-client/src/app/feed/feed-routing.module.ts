import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { SearchResultsContainerComponent } from './containers/search-results-container/search-results-container.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'feed',
    component: HomeContainerComponent
  },
  {
    path: 'search-results',
    component: SearchResultsContainerComponent
  },
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule {}
