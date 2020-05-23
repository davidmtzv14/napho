import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'napho-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent <T = any>  {
  @Input() loading: boolean;
  @Input() form: FormGroup;
  @Input() item: Partial<T>;
  @Output() formSubmit = new EventEmitter<T>();

  get values(): T {
    return this.form.getRawValue() as T;
  }

  constructor(protected formService: FormService) {}

  submit(): void {
    // form.valid is always false when disabled
    this.form.valid || this.form.disabled
      ? this.formSubmit.emit(this.values)
      : this.formService.markFormGroupDirty(this.form);
  }

}
