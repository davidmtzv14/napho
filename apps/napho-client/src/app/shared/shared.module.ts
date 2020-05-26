import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';

const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  // Form controls
  MatInputModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,
  NgMatSearchBarModule,
  // Navigation
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  // Layout
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  // Buttons and Indicators
  MatButtonModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  // Popups and modals
  MatDialogModule,
  MatTooltipModule
];

@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules]
})
export class SharedModule {}
