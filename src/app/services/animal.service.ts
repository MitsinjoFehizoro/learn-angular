import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  animals = ['cat'];
  addAnimal = (animal: string) => this.animals.push(animal);
}
