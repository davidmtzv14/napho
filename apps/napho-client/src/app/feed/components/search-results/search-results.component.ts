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
export class SearchResultsComponent {
  @Input() users: User[];
  @Input() photos: Photo[];
  @Output() createComment = new EventEmitter<Comment>();
  @Output() valueChange = new EventEmitter<string>();
  filterOptions = [
    { label: 'Most recent', value: 'date' },
    { label: 'Most favorites', value: 'favoriteOf' },
    { label: 'Most comments', value: 'comments' }
  ];
  defaultPicturePath = 'assets/img/blank-profile.png';
}
