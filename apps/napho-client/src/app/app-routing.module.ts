import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'spa',
    loadChildren: () => import('./spa/spa.module').then(m => m.SpaModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'spa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
