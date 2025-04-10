import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../login/services/services.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  buttonsValid: boolean = true;
  constructor(private router: Router, private service: ServicesService){
  }

  ngOnInit() {
    if (this.router.url == '/') {
      this.buttonsValid = false;
    } else {
      this.buttonsValid = true;
    }
  }

  clients(){
    this.router.navigate(["main/clients"])
  }
  products(){
    this.router.navigate(["main/products"])
  }
}
