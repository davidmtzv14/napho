import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '@napho/data';

@Component({
  selector: 'napho-photo-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.scss']
})
export class PhotoPostComponent implements OnInit {
  @Input() photo : Photo
  profilePictureUrl;
  defaultPicturePath = 'assets/img/blank-profile.png';

  constructor() { }

  ngOnInit(): void {
  }

}
