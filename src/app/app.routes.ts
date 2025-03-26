import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home - Learn Angular',
    loadComponent: () => import('./components/home/home.component'),
  },
  {
    path: 'learn-angular',
    title: 'Learn Angular',
    loadComponent: () =>
      import('./components/learn-angular/learn-angular.component'),
  },
  {
    path: 'login',
    title: 'Login - Learn Angular',
    loadComponent: () => import('./components/login/login.component'),
  },
  {
    path: 'employees',
    title: 'Employés - Learn Angular',
    loadComponent: () => import('./components/employees/employees.component'),
    canActivate: [() => inject(AuthService).isAuth()],
  },
  {
    path: 'add-employee',
    title: 'Ajout - Learn Angular',
    loadComponent: () =>
      import('./components/add-employee/add-employee.component'),
    canActivate: [() => inject(AuthService).isAuth()],
  },
  {
    path: 'employee/:id',
    title: 'Employé - Learn Angular',
    loadComponent: () =>
      import('./components/detail-employee/detail-employee.component'),
    canActivate: [() => inject(AuthService).isAuth()],
  },
  {
    path: '404',
    title: 'Page non trouvée',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component'),
  },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
    },
    {
  	path: '**',
  	redirectTo: '404',
   },
];
