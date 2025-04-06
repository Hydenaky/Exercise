import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client, Country, DocumentType } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clientSubject= new BehaviorSubject<Client[]>([]);
  user$ = this.clientSubject.asObservable();
  clients: Client[] = [];
  counter: number;

  countries: Country[] = [
      { name: 'Colombia', code: 'CO' },
      { name: 'United States', code: 'US' },
      { name: 'Mexico', code: 'MX' },
      { name: 'Argentina', code: 'AR' },
      { name: 'Brazil', code: 'BR' },
      { name: 'Canada', code: 'CA' },
      { name: 'Spain', code: 'ES' },
      { name: 'Germany', code: 'DE' },
      { name: 'France', code: 'FR' },
      { name: 'United Kingdom', code: 'GB' },
      { name: 'Italy', code: 'IT' },
      { name: 'Japan', code: 'JP' },
      { name: 'China', code: 'CN' },
      { name: 'India', code: 'IN' },
      { name: 'Australia', code: 'AU' },
      { name: 'Chile', code: 'CL' },
      { name: 'Peru', code: 'PE' },
      { name: 'Ecuador', code: 'EC' },
      { name: 'Venezuela', code: 'VE' },
      { name: 'Uruguay', code: 'UY' }
    ];

    documentTypes: DocumentType[] = [
      { name: 'Cédula de ciudadanía', code: 'CC' },
      { name: 'Cédula de extranjería', code: 'CE' },
      { name: 'Tarjeta de identidad', code: 'TI' },
      { name: 'Pasaporte', code: 'PA' },
      { name: 'NIT', code: 'NIT' },
      { name: 'Registro civil', code: 'RC' },
      { name: 'Permiso especial de permanencia', code: 'PEP' },
      { name: 'Documento extranjero', code: 'DE' },
      { name: 'Sin identificación', code: 'SD' }
    ];
    
    
  constructor() { }

  create(client: Client){
    this.clientSubject.next([...this.clientSubject.getValue(), client])
    this.clients = this.clientSubject.value;
    this.clients.forEach((e, i) => {e.id = i});
    console.log(this.clientSubject.getValue());
  }

  update(id: number, client: Client){ 
    this.clients = this.clientSubject.value;
    this.clients[id] = client;
    this.clientSubject.next([...this.clients])
    console.log(this.clientSubject.getValue());
    
  }
  delete(id: number){
    this.clients = this.clientSubject.value;
    this.clients.splice(id, 1)
    this.clientSubject.next([...this.clients])
    console.log(this.clientSubject.getValue());
  }
}
