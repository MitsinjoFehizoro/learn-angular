import { Component, computed, inject, signal } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';
import { EmitterChildComponent } from "./emitter-child/emitter-child.component";
import { AnimalComponent } from "./animal/animal.component";
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-learn-angular',
  imports: [CardComponent, CommonModule, EmitterChildComponent, AnimalComponent],
  template: `
    <div class="app-learn">
      <app-card [title]="'Interpolation'">
        <p>Cours sur angular {{ title }}</p>
        <p>Function sum : {{ sum(5, 5) }}</p>
      </app-card>

      <app-card [title]="'ImageUrl'">
        <img [src]="imageUrl" height="auto" width="100%" />
      </app-card>

      <app-card [title]="'Class par condition'">
        <p [class.red-color]="sum(5, 5) >= 10">Red color if(sum >= 10)</p>
      </app-card>

      <app-card [title]="'Change message'">
        <p>{{ message }}</p>
        <p class="btn" (click)="changeMessage()">Change message</p>
      </app-card>

      <app-card [title]="'Condition'">
        @if(isAuth){
        <p>User connected</p>
        }@else{
        <p>User deconnected</p>
        }
        <p class="btn" (click)="auth()">{{ isAuth ? 'logout' : 'login' }}</p>
      </app-card>

      <app-card title="List of user">
        @for(user of users; track user.id){
        <p>{{ user.id + 1 }} - {{ user.name }}</p>
        }
      </app-card>

      <app-card title="Pipes">
        <p>{{ text | uppercase }}</p>
        <p>Date : {{ date | date }}</p>
        <p>Date : {{ date | date : 'medium' }}</p>
        <p>Date : {{ date | date : 'medium' | uppercase }}</p>
        <p>Number money : {{ number | number }}</p>
        <p>Number money : {{ number | currency }}</p>
        <p>Decimal : {{ decimal | number : '1.2-2' }}</p>
      </app-card>

      <app-card [title]="'Emitter @Output'">
        @for (fruit of fruits; track $index) {
        <p>{{ $index }} - {{ fruit }}</p>
        }
        <app-emitter-child (emitterFruit)="receiverFruit($event)" />
      </app-card>

      <app-card [title]="'Service dependency injection'">
        @for (animal of animals; track $index) {
        <p>{{ $index }} - {{ animal }}</p>
        }
        <app-animal />
      </app-card>

      <app-card [title]="'Signals'">
        <p>Count : {{ count() }}</p>
        <p>Double count : {{ doubleCount() }}</p>
        <p class="btn" (click)="increment()">Increment</p>
        <p class="btn" (click)="setToZero()">Set to 0</p>
      </app-card>
    </div>
  `,
  styleUrl: './learn-angular.component.scss',
})
export default class LearnAngularComponent {
  title = 'learn-angular';
  sum = (a: number, b: number) => a + b;
  imageUrl =
    'https://www.aceinfoway.com/blog/wp-content/uploads/2022/08/7-most-suitable-angularjs-frameworks.png';

  message = 'Initial message';
  changeMessage = () => (this.message = 'Message after click');

  isAuth = false;
  auth = () => (this.isAuth = !this.isAuth);

  users = [
    { id: 0, name: 'Rakoto' },
    { id: 1, name: 'Rasoa' },
    { id: 2, name: 'Ranaivo' },
    { id: 3, name: 'Rakoto' },
    { id: 4, name: 'Rasoa' },
  ];

  text = 'Texte en majuscule';
  date = new Date();
  number = 150000;
  decimal = 1523.2548788;

  fruits = ['Apple'];
  receiverFruit = (fruit: string) => this.fruits.push(fruit);

  animals = inject(AnimalService).animals;

  //signals
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  increment() {
    this.count.update((value) => value + 1);
  }
  setToZero() {
    this.count.set(0);
  }
}
