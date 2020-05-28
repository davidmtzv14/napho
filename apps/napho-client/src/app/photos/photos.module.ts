import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPostComponent } from './components/photo-post/photo-post.component';
import { SharedModule } from '@app/shared/shared.module';
import { PhotoPostContainerComponent } from './containers/photo-post-container/photo-post-container.component';
import { StoreModule } from '@ngrx/store';
import { fromFeed, FeedEffects } from '@app/feed/state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [PhotoPostComponent, PhotoPostContainerComponent],
  imports: [
    StoreModule.forFeature('feed', fromFeed.reducer),
    EffectsModule.forFeature([FeedEffects]),
    SharedModule,
    CommonModule
  ],
  exports: [PhotoPostContainerComponent]
})
export class PhotosModule {}
