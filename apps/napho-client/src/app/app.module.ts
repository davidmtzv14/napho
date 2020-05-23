import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpaContainerComponent } from './spa/containers/spa-container/spa-container.component';
import { SpaComponent } from './spa/components/spa/spa.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxLocalStorageModule } from 'ngx-localstorage';

// const NAPHO_DATA_CONFIGURATION_VALUE: NaphoDataConfiguration = {
//   apiUrl: environment.apiUrl
// };

// const defaultDataServiceConfig: DefaultDataServiceConfig = {
//   root: environment.apiUrl
// };
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    NgxLocalStorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
