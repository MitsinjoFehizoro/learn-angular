import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolBarComponent } from "./components/tool-bar/tool-bar.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolBarComponent],
  template: `
    <main>
		<app-tool-bar/>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
