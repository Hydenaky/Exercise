import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  clients(){
    this.router.navigate(['/clients'], { relativeTo: this.route });
  }
  products(){
    this.router.navigate(['/products'], { relativeTo: this.route });
  }
}
