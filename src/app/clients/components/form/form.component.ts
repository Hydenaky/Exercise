import { Component } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  text1: string | undefined;

  text2: string | undefined;

  number: string | undefined;

  selectedCity: City | undefined;

  cities: City[] = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
  ];
}
