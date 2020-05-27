import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { NaphoDataConfiguration, NAPHO_DATA_CONFIGURATION } from '@napho/data';
import { environment } from '../environments/environment';
import { AuthEffects, fromAuth } from './auth/state';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { fromFeed } from './feed/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    StoreModule.forRoot({ auth: fromAuth.reducer, feed: fromFeed.reducer }, {}),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      name: 'EOS UI',
      maxAge: 100,
    }),
    NgxLocalStorageModule.forRoot()
  ],
  providers: [
    {
      provide: NAPHO_DATA_CONFIGURATION,
      useValue: NAPHO_DATA_CONFIGURATION_VALUE
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
