import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country, DocumentType, ModalClient } from '../../../interfaces/interfaces';
import { ClientsService } from '../../services/clients.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(private formBuilder: FormBuilder, private serviceClient: ClientsService,@Inject(MAT_DIALOG_DATA) public data: ModalClient){
    this.form = this.formBuilder.group({
      id: [this.data?.client?.id || 0],
      Name: [this.data?.client?.Name || ''],
      Lastname: [this.data?.client?.Lastname || ''],
      IDType: [this.data?.client?.IDType || ''],
      IDNumber: [this.data?.client?.IDNumber || ''],
      Country: [ this.data?.client?.Country || ''],
      foreing : [this.data?.client?.foreing || '']
    })

    this.countries = this.serviceClient.countries;
    this.IDType = serviceClient.documentTypes;
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
    this.serviceClient.create(this.form.value);   
  }

  updateClient(){
    this.serviceClient.updateClient(this.form.value,this.data?.client?.id)
  }
}
