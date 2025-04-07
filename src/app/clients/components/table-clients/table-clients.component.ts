import { Component } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../../interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table-clients',
  standalone: false,
  templateUrl: './table-clients.component.html',
  styleUrl: './table-clients.component.scss'
})
export class TableClientsComponent {
  clients: Client[];

    constructor(private clientsService: ClientsService, private dialog: MatDialog) {
      this.clientsService.user$.subscribe(client=> this.clients= client);    
    }

    deleteClient(id:number){
      this.clientsService.deleteClient(id);
    }

    updateClient(client : Client){
      let modalClient ={client, avaliable:true}
      this.clientsService.saveDialg(this.dialog.open(FormComponent,
        {height:'500px', width:'500px',data:modalClient}));
    }
  }
