import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [RouterLink],
  template: `
    <section>
      <header>
        <p>Gestion des employés</p>	
        <button class="btn" (click)="onLogout()">Deconnextion</button>
      </header>
      <div class="wrapper">
        <div>
          <h2>Mes employés</h2>
          <button class="btn" routerLink="/add-employee">Nouvel employé</button>
        </div>
        <p>Oups! Pas encore d'employés à afficher</p>
        <p>Commencer par ajouter en un.</p>
      </div>
    </section>
  `,
  styleUrl: './employees.component.scss',
})
export default class EmployeesComponent {
  private router = inject(Router);

  onLogout() {
    localStorage.clear;
    this.router.navigate(['login']);
  }
}
