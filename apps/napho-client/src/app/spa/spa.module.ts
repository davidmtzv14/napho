import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaRoutingModule } from './spa-routing.module';
import { SpaComponent } from './components/spa/spa.component';
import { SpaContainerComponent } from './containers/spa-container/spa-container.component';


@NgModule({
  declarations: [SpaComponent, SpaContainerComponent],
  imports: [
    CommonModule,
    SpaRoutingModule
  ]
})
export class SpaModule { }
