import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country, DocumentType } from '../../../interfaces/interfaces';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  foreing: boolean | undefined;

  countries: Country[];
  IDType: DocumentType[];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ClientsService){
    this.form = formBuilder.group({
      id: [0],
      Name: [''],
      Lastname: [''],
      IDType: [''],
      IDNumber: [''],
      Country: [''],
    })

    this.countries = this.service.countries;
    this.IDType = service.documentTypes;
  }


  event(){
    if (this.form.value.Country.code !== 'CO') {
      this.foreing = false;
    } else {
      this.foreing = true;
    }
  }

  submit(bool: boolean){
    if (bool) {
      this.service.create(this.form.value);      
    } else {
      this.service.update(1,this.form.value)
    }
  }

  //service test
  delete(){
    this.service.delete(1)
  }

}
