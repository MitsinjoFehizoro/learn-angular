import { Component, inject } from '@angular/core';
import { AnimalService } from '../../../services/animal.service';

@Component({
  selector: 'app-animal',
  imports: [],
  template: `
    <p>Click the button for add animal</p>
    <p class="btn" (click)="addAnimal()">Add animal</p>
  `,
  styles: ``,
})
export class AnimalComponent {
	animalService = inject(AnimalService)
	addAnimal = ()=>this.animalService.addAnimal('Dog')
}
