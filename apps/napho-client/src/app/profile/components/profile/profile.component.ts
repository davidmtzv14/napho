import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormComponent } from '@app/core/components/form/form.component';
import { FormService } from '@app/core/services/form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Photo, User } from '@napho/data';

@Component({
  selector: 'napho-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends FormComponent implements OnChanges {
  @Input() userProfile: Partial<User>;
  @Input() photos: Partial<Photo>[];
  @Input() favPhotos: Partial<Photo>[];
  @Input() following: Partial<Photo>[];
  @Input() followers: Partial<Photo>[];
  @Input() isSearch: boolean;
  @Output() followUser = new EventEmitter<number>();
  @Output() createComment = new EventEmitter<Comment>();
  profilePictureUrl;
  defaultPicturePath = 'assets/img/blank-profile.png';
  photoArray: Partial<Photo>[];
  favPhotoArray: Partial<Photo>[];
  followingArray: Partial<User>[];
  followerArray: Partial<User>[];

  constructor(protected formService: FormService, private fb: FormBuilder) {
    super(formService);
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      description: [null],
      profileImgUrl: [null],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userProfile && this.userProfile) {
      this.populateProfile();
    }

    if (changes.photos && this.photos) {
      this.photoArray = Object.values(this.photos);
    }
    if (changes.favPhotos && this.favPhotos) {
      this.favPhotoArray = Object.values(this.favPhotos);
    }
    if (changes.followers && this.followers) {
      this.followerArray = Object.values(this.followers);
    }
    if (changes.following && this.following) {
      this.followingArray = Object.values(this.following);
    }
  }

  populateProfile() {
    this.form.patchValue(this.userProfile);
    if (this.isSearch) {
      this.form.disable();
    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = load => {
        this.profilePictureUrl = load.target.result;
      };
    }
  }
  public delete() {
    this.profilePictureUrl = null;
  }
}
