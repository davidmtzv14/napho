import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginFormContainerComponent } from './containers/login-form-container/login-form-container.component';
import { CreateAccountFormComponent } from './components/create-account-form/create-account-form.component';
import { CreateAccountFormContainerComponent } from './containers/create-account-form-container/create-account-form-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginFormContainerComponent,
    CreateAccountFormComponent,
    CreateAccountFormContainerComponent
  ],
  imports: [SharedModule, CommonModule, AuthRoutingModule]
})
export class AuthModule {}
