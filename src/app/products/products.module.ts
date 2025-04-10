import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { FormComponent } from './components/form/form.component';
import { ProductsComponent } from './components/products/products.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MenuComponent,
    FormComponent,
    ProductsComponent,
    MenuComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    
  ]
})
export class ProductsModule { }
