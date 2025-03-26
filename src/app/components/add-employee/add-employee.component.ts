import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [RouterLink],
  template: `
    <section>
      <header>
        <div>
          <p class="back" routerLink="/employees" ><i class="fa fa-arrow-left"></i></p>
          <p>Nouvel employé</p>
        </div>
      </header>
    </section>
  `,
  styleUrl: './add-employee.component.scss',
})
export default class AddEmployeeComponent {}
