import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'napho-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent implements OnInit, OnDestroy {
  @Output() searchChange = new EventEmitter<string>();
  @Output() logout = new EventEmitter();
  searchControl = new FormControl('');

  private destroy$ = new Subject<void>();

  ngOnInit() {
    // this.searchControl.valueChanges
    //   .pipe(debounceTime(1000), takeUntil(this.destroy$))
    //   .subscribe(value => this.searchChange.emit(value));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  search(value) {
    this.searchChange.emit(value);
    console.log(value);
  }
}
