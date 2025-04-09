import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { products } from '../../interfaces/interfaces';
import { FormComponent } from '../components/form/form.component';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private productsSubject = new BehaviorSubject<products[]>([]);
  products$ = this.productsSubject.asObservable();
  products:products[];
  counter: number = 0;
  dialogRef: MatDialogRef<FormComponent> | undefined;
  constructor() {}

  saveRef(dialogRef: MatDialogRef<FormComponent>){
    this.dialogRef = dialogRef;
  }
  create(product: products){
    const newProduct = {...product};
    newProduct.id = this.counter++;
    this.productsSubject.next([...this.productsSubject.getValue(), newProduct]);
  }
  update(product: products, id: number){
    this.products= this.productsSubject.value;
    this.products[id]= product;
    this.productsSubject.next([...this.products]);
  }
  delete(id: number){
    this.products= this.productsSubject.getValue();
    this.products.splice(id, 1)
    this.productsSubject.next([...this.products])
  }
}
