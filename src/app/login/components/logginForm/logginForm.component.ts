import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './logginForm.component.html',
  styleUrl: './logginForm.component.scss'
})
export class FormComponent {
  form: FormGroup;
  valid: boolean;
  constructor(private formBuilder: FormBuilder, private service: ServicesService){
    this.form = formBuilder.group({
      user: [''],
      password: ['']
    });
  }

  loggin(){
    this.service.loggin(this.form.value);
    if (this.service.valid) {
      this.valid = this.service.valid;
    }
  }
}
