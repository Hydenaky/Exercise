import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  active: boolean = true;
  registerRedirect(){
    this.active = !this.active;
  }
}
