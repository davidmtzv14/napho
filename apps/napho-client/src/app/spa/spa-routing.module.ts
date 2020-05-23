import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaContainerComponent } from './containers/spa-container/spa-container.component';


const routes: Routes = [
  {
    path: '',
    component: SpaContainerComponent,
    // children: [
    //   {
    //     path: 'workplaces',
    //     loadChildren: () =>
    //       import('@app/workplaces/workplaces.module').then(
    //         m => m.WorkplacesModule
    //       )
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'workplaces',
    //     pathMatch: 'full'
    //   }
    // ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaRoutingModule { }
