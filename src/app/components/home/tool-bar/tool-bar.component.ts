import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  imports: [],
  template: `
    <div class="container">
      <div class="logo">
        <img src="favicon.ico" />
        <p>v19</p>
      </div>
    </div>
  `,
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent {}
