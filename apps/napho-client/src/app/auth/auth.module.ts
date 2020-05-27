import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginFormContainerComponent } from './containers/login-form-container/login-form-container.component';
import { CreateAccountFormComponent } from './components/create-account-form/create-account-form.component';
import { CreateAccountFormContainerComponent } from './containers/create-account-form-container/create-account-form-container.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects, fromAuth } from './state';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginFormContainerComponent,
    CreateAccountFormComponent,
    CreateAccountFormContainerComponent
  ],
  imports: [
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    SharedModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
