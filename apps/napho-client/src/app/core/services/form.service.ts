import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  markFormGroupDirty(formGroup: FormGroup): void {
    markFormGroupDirty(formGroup);
  }
}

export function markFormGroupDirty(formGroup: FormGroup): void {
  traverseFormGroup(formGroup, control => control.markAsDirty());
}

function traverseFormGroup(formGroup: FormGroup, fn: (control: AbstractControl) => void) {
  if (!formGroup.controls) {
    fn(formGroup);
    return;
  }

  let control: any;
  Object.values(formGroup.controls).forEach(formControl => {
    control = formControl as FormGroup;
    fn(control);

    if (control.controls) {
      if (control.controls.constructor === Array) {
        control.controls.forEach((c: FormGroup) => traverseFormGroup(c, fn));
      } else {
        Object.keys(control.controls).forEach(field => {
          const formGroupControl = control.get(field);
          traverseFormGroup(formGroupControl as FormGroup, fn);
        });
      }
    }
  });
}
