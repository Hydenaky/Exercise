import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../login/services/services.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  buttonsValid: boolean;
  constructor(private router: Router, private service: ServicesService){
    this.buttonsValid = this.service.buttonsValid;
  }
  clients(){
    this.router.navigate(["main/clients"])
  }
  products(){
    this.router.navigate(["main/products"])
  }
}
