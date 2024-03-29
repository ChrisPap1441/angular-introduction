import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Chris';

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
  }
}
