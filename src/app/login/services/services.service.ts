import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country, logginUser, registerUser} from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private userSubject = new BehaviorSubject<registerUser[]>([{user: {user: 'A', password: '123'}, email: 'B', country: {name: 'Colombia', code: 'CO'}, repeatPassword: '123'}])
  users: registerUser[];
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
  public valid: boolean = false;
  public userValid: boolean = false;
  public emailValid: boolean = false;
  constructor(private router: Router) {}

  register(user: registerUser){
    this.users = this.userSubject.value;
    let id: number = this.users.findIndex(u => u.user)    
    if (id>=0 && ( user.user.user === this.users[id]?.user?.user || user.user.user === this.users[id]?.email)) {
      if(user.user.user === this.users[id]?.user?.user){
        this.userValid = true;
      } /*else {
        this.userValid = false;
      }*/
      if (user.user.user === this.users[id]?.email) {
        this.emailValid = true;
      } /*else {
        this.emailValid = false;
      }*/
    } else {
      console.log(false);
      const newUser = {...user}
      this.userSubject.next([...this.userSubject.getValue(),newUser]);
      this.router.navigate(['/clients']);
    }
  }
  loggin(user: logginUser){
    this.users = this.userSubject.value;
    try {
      let id: number = this.users.findIndex(u => u.user)
      if(user.user === this.users[id].user.user || user.user === this.users[id].email && user.user !== ''){
        this.router.navigate(['/clients']);
        this.valid = false;
      }else{
        this.valid = true;
      }
    } catch (TypeError) {      
      this.valid = true;
    }
  }
}
