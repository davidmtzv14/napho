import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileResolverService } from './resolvers/profile-resolver.service';
import { SearchProfileContainerComponent } from './containers/search-profile-container/search-profile-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileContainerComponent,
    resolve: {resolvedProfile: ProfileResolverService}
  },
  {
    path: ':id',
    component: SearchProfileContainerComponent,
    resolve: {resolvedProfile: ProfileResolverService}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
