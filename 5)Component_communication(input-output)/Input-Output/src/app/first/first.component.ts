import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-first',
  imports: [FormsModule, SecondComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  fmsg: string = "";
  fromchild: any = "";

  RecieveChildMsg($event:any) {
    //console.log($event);
    this.fromchild = $event;
  }
}
