import { Component, OnDestroy } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../../interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-clients',
  standalone: false,
  templateUrl: './table-clients.component.html',
  styleUrl: './table-clients.component.scss'
})
export class TableClientsComponent implements OnDestroy{
  clients: Client[];
  subscription: Subscription | undefined;
    constructor(private clientsService: ClientsService, private dialog: MatDialog) {
      this.subscription = this.clientsService.user$.subscribe(client=> this.clients= client);    
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe;
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
