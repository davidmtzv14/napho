import { Component, OnInit, Input } from '@angular/core';
import { Photo, CommentStatus } from '@napho/data';
import { FormService } from '@app/core/services/form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponent } from '@app/core/components/form/form.component';

@Component({
  selector: 'napho-photo-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.scss']
})
export class PhotoPostComponent extends FormComponent {
  @Input() photo: Photo;
  profilePictureUrl;
  defaultPicturePath = 'assets/img/blank-profile.png';
  showComment = false;

  constructor(protected formService: FormService, private fb: FormBuilder) {
    super(formService);
    this.form = this.fb.group({
      photoId: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  changeShowComment() {
    this.showComment = !this.showComment;
  }

  onSubmit() {
    this.form.get('photoId').patchValue(this.photo.id);
    this.submit();
  }
}
