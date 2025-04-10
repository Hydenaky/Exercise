import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { repeat } from 'rxjs';
import { Country, registerUser } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
form: FormGroup;
foreing: boolean | undefined;
countries: Country[];
userValid: boolean;
emailValid: boolean;
constructor(private formBuilder: FormBuilder, private service: ServicesService){
  this.form = formBuilder.group({
    user: [''],
    email: [''],
    country: [''],
    password: [''],
    repeatPassword: ['']
  })
  this.countries = this.service.countries;
}

event(){
  if (this.form.value.country.code !== 'CO') {
    this.foreing = true;
    this.form.get('foreing')?.setValue(this.foreing);
  } else {
    this.foreing = false;
    this.form.get('foreing')?.setValue(this.foreing);
  }
}

register(){
  const register: registerUser = {user: {user: this.form.value.user, password: this.form.value.password}, email: this.form.value.email, repeatPassword: this.form.value.repeatPassword, country: this.form.value.country}
  this.userValid = false
  this.emailValid = false
  
  this.service.register(register)
  if (this.service.userValid) {
    this.userValid = this.service.userValid
  }
  if (this.service.emailValid){
    this.emailValid = this.service.emailValid
  }
}
}
