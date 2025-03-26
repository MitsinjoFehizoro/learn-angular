import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="container">
      <p class="title-card">{{ title }}</p>
      <div class="wrapper">
        <ng-content />
      </div>
    </div>
  `,
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title!: string;
}
