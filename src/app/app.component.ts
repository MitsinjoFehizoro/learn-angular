import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CardComponent } from './components/learn-angular/card/card.component';
import { EmitterChildComponent } from './components/learn-angular/emitter-child/emitter-child.component';
import { AnimalComponent } from './components/learn-angular/animal/animal.component';
import { AnimalService } from './services/animal.service';
import { RouterOutlet } from '@angular/router';
import { ToolBarComponent } from "./components/home/tool-bar/tool-bar.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolBarComponent],
  template: `
    <main>
      <app-tool-bar />
      <router-outlet/>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
