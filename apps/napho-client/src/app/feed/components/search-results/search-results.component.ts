import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { User, Photo } from '@napho/data';

@Component({
  selector: 'napho-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges {
  @Input() users: User[];
  @Input() photos: Photo[];
  @Output() createComment = new EventEmitter<Comment>();
  usersArray: User[];
  photoArray: Photo[];
  filterOptions = [
    { label: 'Most recent', value: 'date' },
    { label: 'Most favorites', value: 'favoriteOf' },
    { label: 'Most comments', value: 'comments' }
  ];
  defaultPicturePath = 'assets/img/blank-profile.png';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.users && this.users) {
      this.usersArray = Object.values(this.users);
    }
    if (changes.photos && this.photos) {
      this.photoArray = Object.values(this.photos);
    }
  }
}
