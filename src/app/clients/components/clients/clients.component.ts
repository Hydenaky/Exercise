import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  standalone: false,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  constructor(private clientsService: ClientsService,private dialog: MatDialog){}

  openModal(){
    this.clientsService.saveDialg(this.dialog.open(FormComponent,{height: '500px',width:'500px'}));
  }
}
