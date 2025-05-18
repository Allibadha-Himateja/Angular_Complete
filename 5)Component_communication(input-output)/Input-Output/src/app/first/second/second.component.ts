import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @Input() fromparent: string = "";

  toparent: string = "";
  @Output() SendToParent: EventEmitter<string> = new EventEmitter<string>();

  SendToTheParent() {
    console.log(this.toparent);
    this.SendToParent.emit(this.toparent);
  }

}
