import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaRoutingModule } from './spa-routing.module';
import { SpaComponent } from './components/spa/spa.component';
import { SpaContainerComponent } from './containers/spa-container/spa-container.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [SpaComponent, SpaContainerComponent],
  imports: [SharedModule, CommonModule, SpaRoutingModule],
})
export class SpaModule {}
