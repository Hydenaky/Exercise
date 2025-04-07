import { Component } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-table-clients',
  standalone: false,
  templateUrl: './table-clients.component.html',
  styleUrl: './table-clients.component.scss'
})
export class TableClientsComponent {
  clients: Client[];

    constructor(private clientsService: ClientsService) {
      this.clientsService.user$.subscribe(client=> this.clients= client);    
    }
    delete(id:number){
      this.clientsService.deleteClient(id);
      this.clients.forEach(element => {
        console.log(element);
      });
    }
}
