import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'napho-photo-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.scss']
})
export class PhotoPostComponent implements OnInit {
  profilePictureUrl;
  defaultPicturePath = 'assets/img/blank-profile.png';

  constructor() { }

  ngOnInit(): void {
  }

}
