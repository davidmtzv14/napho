import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaContainerComponent } from './containers/spa-container/spa-container.component';


const routes: Routes = [
  {
    path: '',
    component: SpaContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/feed/feed.module').then(
            m => m.FeedModule
          )
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@app/profile/profile.module').then(
            m => m.ProfileModule
          )
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaRoutingModule { }
