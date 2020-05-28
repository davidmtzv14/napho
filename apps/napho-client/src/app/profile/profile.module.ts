import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from '@app/shared/shared.module';
import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PhotosModule } from '@app/photos/photos.module';
import { StoreModule } from '@ngrx/store';
import { fromFeed, FeedEffects } from '@app/feed/state';
import { EffectsModule } from '@ngrx/effects';
import { SearchProfileContainerComponent } from './containers/search-profile-container/search-profile-container.component';

@NgModule({
  declarations: [ProfileComponent, ProfileContainerComponent, SearchProfileContainerComponent],
  imports: [
    StoreModule.forFeature('feed', fromFeed.reducer),
    EffectsModule.forFeature([FeedEffects]),
    SharedModule,
    CommonModule,
    ProfileRoutingModule,
    PhotosModule
  ]
})
export class ProfileModule {}
