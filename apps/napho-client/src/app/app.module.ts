import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { NaphoDataConfiguration, NAPHO_DATA_CONFIGURATION } from '@napho/data';
import { environment } from '../environments/environment';
import { AuthEffects, fromAuth } from './auth/state';

const NAPHO_DATA_CONFIGURATION_VALUE: NaphoDataConfiguration = {
  apiUrl: environment.apiUrl
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({ auth: fromAuth.reducer }, {}),
    EffectsModule.forRoot([AuthEffects]),
    NgxLocalStorageModule.forRoot()
  ],
  providers: [
    {
      provide: NAPHO_DATA_CONFIGURATION,
      useValue: NAPHO_DATA_CONFIGURATION_VALUE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
