import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormContainerComponent } from './containers/login-form-container/login-form-container.component';
import { CreateAccountFormContainerComponent } from './containers/create-account-form-container/create-account-form-container.component';

const routes: Routes = [
  {
    path: 'log-in',
    component: LoginFormContainerComponent
  },
  {
    path: 'create-account',
    component: CreateAccountFormContainerComponent
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
