import { Component } from '@angular/core';
import { ModalProduct, products } from '../../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  products: products[]
  constructor(private Service: ServiceService, public dialog: MatDialog) {
    this.Service.products$.subscribe(product=> this.products = product);    
  }

  update(product: products){
    let data: ModalProduct = {
      product: product,
      data: false
    }
    this.Service.saveRef(this.dialog.open(FormComponent, {width: '50%', height: '75%', data: data}))
  }

  delete(id: number){
    this.Service.delete(id)
  }
}
