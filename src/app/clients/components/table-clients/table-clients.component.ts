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
    {id:1,name:"Juanito",lastname:"Alimaña",IDType:{ name: 'Cédula de ciudadanía', code: 'CC' },IDNumber:230212,Country:{name:"Colombia", code:''},foreing:false},
    {id:2,name:"Pedro",lastname:"Castillo",IDType:{ name: 'Cédula de ciudadanía', code: 'CC' },IDNumber:1000321,Country:{name:"Spain", code:''},foreing:true}
  ];

    constructor(private clientsService: ClientsService) {
      
    } 
}
