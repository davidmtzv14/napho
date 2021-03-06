import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
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
  @Input() following: Partial<User>[];
  @Input() followers: Partial<User>[];
  @Input() isSearch: boolean;
  @Output() followUser = new EventEmitter<number>();
  @Output() createComment = new EventEmitter<Comment>();
  profilePictureUrl;
  defaultPicturePath = 'assets/img/blank-profile.png';

  constructor(protected formService: FormService, private fb: FormBuilder) {
    super(formService);
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      description: [null],
      profileImgUrl: [null]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userProfile && this.userProfile) {
      this.populateProfile();
    }
  }

  populateProfile() {
    this.profilePictureUrl = this.userProfile.profileImgUrl

    const {profileImgUrl, ...profile} = this.userProfile
    this.form.patchValue(profile);
    if (this.isSearch) {
      this.form.disable();
    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = load => {
        this.profilePictureUrl = reader.result;
        this.form.get('profileImgUrl').patchValue(reader.result);
      };
    }
  }

  public delete() {
    this.profilePictureUrl = null;
  }
}
