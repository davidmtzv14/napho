import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaContainerComponent } from './containers/spa-container/spa-container.component';
import { ProfileContainerComponent } from '@app/profile/containers/profile-container/profile-container.component';

const routes: Routes = [
  {
    path: '',
    component: SpaContainerComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('@app/feed/feed.module').then(m => m.FeedModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
        import('@app/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaRoutingModule {}
