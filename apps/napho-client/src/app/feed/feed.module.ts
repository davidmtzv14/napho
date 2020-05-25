import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultsContainerComponent } from './containers/search-results-container/search-results-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { SharedModule } from '../shared/shared.module';
import { FeedRoutingModule } from './feed-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    SearchResultsComponent,
    SearchResultsContainerComponent,
    HomeContainerComponent
  ],
  imports: [CommonModule, SharedModule, FeedRoutingModule]
})
export class FeedModule {}
