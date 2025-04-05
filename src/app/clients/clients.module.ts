import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { FormComponent } from './components/form/form.component';
import { TableClientsComponent } from './components/table-clients/table-clients.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ClientsComponent,
    FormComponent,
    TableClientsComponent,
    
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule
  ]
})
export class ClientsModule { }
