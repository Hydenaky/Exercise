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
    this.form = this.formBuilder.group({
      id: [0],
      Name: [''],
      Lastname: [''],
      IDType: [''],
      IDNumber: [''],
      Country: [''],
      foreing : ['']
    })

    this.countries = this.service.countries;
    this.IDType = service.documentTypes;
  }


  event(){
    if (this.form.value.Country.code !== 'CO') {
      this.foreing = true;
      this.form.get('foreing')?.setValue(this.foreing);
    } else {
      this.foreing = false;
      this.form.get('foreing')?.setValue(this.foreing);
    }
  }

  createClient(){
    this.event();
    this.service.create(this.form.value);   
    console.log(this.foreing);    
  }
}
