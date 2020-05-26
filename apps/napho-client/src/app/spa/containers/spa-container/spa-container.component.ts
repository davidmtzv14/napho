import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'napho-spa-container',
  templateUrl: './spa-container.component.html',
  styleUrls: ['./spa-container.component.scss']
})
export class SpaContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearchChange(value) {
    console.log('navigate', this.router);
    this.router.navigateByUrl('/spa/home/search-results');
  }
}
