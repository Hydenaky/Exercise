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
  products: Client[]=[
    {id:1,name:"Juanito",lastname:"Alimaña",IDType:"CC",IDNumber:230212,country:"Colombia",foreing:false},
    {id:2,name:"Pedro",lastname:"Castillo",IDType:"CC",IDNumber:1000321,country:"España",foreing:true}
  ];

    constructor(private clientsService: ClientsService) {
      
    } 
}
