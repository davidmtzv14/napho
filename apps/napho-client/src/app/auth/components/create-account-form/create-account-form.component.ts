import { Component } from '@angular/core';
import { FormComponent } from '../../../core/components/form/form.component';
import { FormService } from '../../../core/services/form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'napho-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent extends FormComponent {
  constructor(protected formService: FormService, private fb: FormBuilder) {
    super(formService);
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }
}
