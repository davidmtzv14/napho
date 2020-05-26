import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from '@app/shared/shared.module';
import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PhotosModule } from '@app/photos/photos.module';

@NgModule({
  declarations: [ProfileComponent, ProfileContainerComponent],
  imports: [SharedModule, CommonModule, ProfileRoutingModule, PhotosModule]
})
export class ProfileModule {}
