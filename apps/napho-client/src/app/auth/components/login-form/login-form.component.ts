import { Component } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient } from '@angular/common/http';
import { FormComponent } from '../../../core/components/form/form.component';
import { FormService } from '../../../core/services/form.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'napho-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends FormComponent {
  // hello$ = this.http.get<Message>('/api/hello');
  constructor(
    protected formService: FormService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    super(formService);
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
