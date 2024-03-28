import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Chris';

  person = {
    givenName : 'Christos',
    surName: 'Papadopoulos',
    age: 0x20,
    email: 'papadopoulos.chris@aueb.gr',
  };
}
