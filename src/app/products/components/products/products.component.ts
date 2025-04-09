import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ModalProduct, products } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  product: products = {  id: 0,
    name: '',
    provider: '',
    taxes: false,
    avaliable: false,
    price: 0}
  constructor(private service: ServiceService,public dialog: MatDialog){}

  openModal(){
    let data: ModalProduct = {
      product: this.product,
      data: true
    }
    this.service.saveRef(this.dialog.open(FormComponent,{height: '75%',width:'50%', data: data}));
  }
}
