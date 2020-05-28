import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from '@app/shared/shared.module';
import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PhotosModule } from '@app/photos/photos.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SearchProfileContainerComponent } from './containers/search-profile-container/search-profile-container.component';
import { fromProfile, ProfileEffects } from './state';

@NgModule({
  declarations: [ProfileComponent, ProfileContainerComponent, SearchProfileContainerComponent],
  imports: [
    StoreModule.forFeature('profile', fromProfile.reducer),
    EffectsModule.forFeature([ProfileEffects]),
    SharedModule,
    CommonModule,
    ProfileRoutingModule,
    PhotosModule
  ]
})
export class ProfileModule {}
