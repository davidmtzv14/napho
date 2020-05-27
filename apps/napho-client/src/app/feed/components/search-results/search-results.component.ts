import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'napho-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
   filterOptions = [
    {label: 'Most recent', value: 1},
    {label: 'Most favorites', value: 2},
    {label: 'Most comments', value: 3},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
