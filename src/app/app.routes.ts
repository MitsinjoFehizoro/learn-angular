import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path : 'home',
		title :'Home - Learn Angular',
		loadComponent : ()=>import('./components/home/home.component')
	},
	{
		path :'learn',
		title : 'Learn',
		loadComponent : ()=>import('./components/learn-angular/learn-angular.component')
	}
];
