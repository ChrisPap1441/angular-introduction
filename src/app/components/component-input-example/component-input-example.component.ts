import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0 : Person = {
    givenName : 'Christos',
    surName: 'Papadopoulos',
    age: 0x20,
    email: 'papadopoulos.chris@aueb.gr',
    address: 'Veroia, Greece'
  };

  person1 : Person = {
    givenName : 'John',
    surName: 'Doe',
    age: 0x24,
    email: 'john.doe@aueb.gr',
    address: 'New York, USA'
  };
}
