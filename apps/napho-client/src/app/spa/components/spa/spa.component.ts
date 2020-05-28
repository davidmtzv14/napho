import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormComponent } from '@app/core/components/form/form.component';
import { FormService } from '@app/core/services/form.service';

@Component({
  selector: 'napho-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent extends FormComponent implements OnInit, OnDestroy {
  @Output() searchChange = new EventEmitter<string>();
  @Output() logout = new EventEmitter();

  private destroy$ = new Subject<void>();

  constructor(protected formService: FormService, private fb: FormBuilder) {
    super(formService);
    this.form = this.fb.group({
      search: [null]
    });
  }

  ngOnInit() {
    // this.searchControl.valueChanges
    //   .pipe(debounceTime(1000), takeUntil(this.destroy$))
    //   .subscribe(value => this.searchChange.emit(value));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  search() {
    this.submit()
  }
}
