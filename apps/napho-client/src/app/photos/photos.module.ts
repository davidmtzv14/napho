import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPostComponent } from './components/photo-post/photo-post.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [PhotoPostComponent],
  imports: [SharedModule, CommonModule],
  exports: [PhotoPostComponent]
})
export class PhotosModule {}
