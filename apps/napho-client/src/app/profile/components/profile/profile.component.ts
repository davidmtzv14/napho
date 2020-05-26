import { Component } from '@angular/core';
import { FormComponent } from '@app/core/components/form/form.component';
import { FormService } from '@app/core/services/form.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'napho-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends FormComponent {
  constructor(protected formService: FormService, private fb: FormBuilder) {
    super(formService);
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

}
