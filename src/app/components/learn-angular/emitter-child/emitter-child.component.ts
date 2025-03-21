import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-emitter-child',
  imports: [],
  template: `
   <p>Click the button for emitter</p>
	<p class="btn" (click)="addFruit()" >Add fruit</p>
  `,
  styles: ``,
})
export class EmitterChildComponent {
	@Output() emitterFruit = new EventEmitter<string>()
	addFruit = ()=>this.emitterFruit.emit('Banana')
}
