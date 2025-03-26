import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [JsonPipe, FormsModule],
  template: `
    <form action="" (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm">
      <p>FormData : {{ formData | json }}</p>
      <input
        type="text"
        name="fullName"
        placeholder="Nom"
        [(ngModel)]="formData.fullName"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        [(ngModel)]="formData.email"
        required
      />
      <textarea
        name="message"
        placeholder="Votre message"
        cols="30"
        rows="5"
        [(ngModel)]="formData.message"
        required
      ></textarea>
      <button
        class="btn"
        type="submit"
        [disabled]="contactForm.invalid"
        [class.btn-disabled]="contactForm.invalid"
      >
        Envoyer
      </button>
    </form>
  `,
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  formData = {
    fullName: '',
    email: '',
    message: '',
  };

  onSubmit(contactForm: NgForm) {
    console.log('FormData : ', contactForm.value);
    contactForm.reset();
  }
}
