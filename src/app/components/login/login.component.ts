import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  template: `
    <section>
      <div class="title">
        <h2>Gestion des employés</h2>
		  <p>Partie de la platerforme <span>Learn Angular</span> utilisée pour gérer les employés</p>
		  <button class="btn" (click)="onLogin()">Connectez-vous</button>
      </div>
    </section>
  `,
  styleUrl: './login.component.scss',
})
export default class LoginComponent {
	private router = inject(Router)

	onLogin(){
		localStorage.setItem('isAuth', 'true')
		this.router.navigate(['employees'])
	}
}
