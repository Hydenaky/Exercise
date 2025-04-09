import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalProduct } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
form: FormGroup;
constructor(private service: ServiceService, private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: ModalProduct){ 
  this.form = formBuilder.group({
    id: [this.data?.product?.id || 0],
    name: [this.data?.product?.name || ''],
    provider: [this.data?.product?.provider || ''],
    taxes: [this.data?.product?.taxes || false],
    avaliable: [this.data?.product?.avaliable || false],
    price: [this.data?.product?.price || 0]
  })
}

save(data: boolean){
  if (data) {
    this.service.create(this.form.value);
    this.service.dialogRef?.close();
  } else {
    this.service.update(this.form.value, this.form.value.id);
    this.service.dialogRef?.close();
  }
}
} 
