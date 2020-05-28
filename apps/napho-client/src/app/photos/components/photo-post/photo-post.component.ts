import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { Photo, CommentStatus, User, Comment } from '@napho/data';
import { FormService } from '@app/core/services/form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponent } from '@app/core/components/form/form.component';

@Component({
  selector: 'napho-photo-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.scss']
})
export class PhotoPostComponent extends FormComponent implements OnChanges {
  @Input() photo: Photo;
  @Input() user: Partial<User>;
  @Output() updateCommentStatus = new EventEmitter<Partial<Comment>>();
  profilePictureUrl;
  defaultPicturePath = 'assets/img/blank-profile.png';
  showComment = false;
  showComments = false;
  pendingStatus = CommentStatus.pending;
  approvedStatus = CommentStatus.approved;
  rejectedStatus = CommentStatus.rejected;

  constructor(protected formService: FormService, private fb: FormBuilder) {
    super(formService);
    this.form = this.fb.group({
      photoId: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photo && this.photo) {
      this.photo = {
        ...this.photo,
        comments: this.photo.comments.filter(comment => {
          if (
            comment.status === this.approvedStatus ||
            (comment.status === this.pendingStatus &&
              this.photo.user.id === this.user.id)
          ) {
            return comment;
          }
        })
      };
    }
  }

  changeShowComment() {
    this.showComment = !this.showComment;
  }

  changeShowComments() {
    this.showComments = !this.showComments;
  }

  changeCommentStatus(id: number, status: CommentStatus) {
    let photoId: number;
    this.photo = {
      ...this.photo,
      comments: this.photo.comments.map(comment => {
        if (comment.id === id) {
          comment = {
            ...comment,
            status
          };

          photoId = comment.photoId;
          return comment;
        }
        return comment;
      })
    };

    const commentPayload = {
      id,
      status,
      photoId
    };
    this.updateCommentStatus.emit(commentPayload);
  }

  onSubmit() {
    this.form.get('photoId').patchValue(this.photo.id);
    this.submit();
  }
}
