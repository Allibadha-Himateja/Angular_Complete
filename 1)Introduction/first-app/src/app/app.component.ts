import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  mystr: any = "";
  list: string[] = ['hi', 'hello', 'ram', 'ravi'];

  AddItem() {
    this.list.push(this.mystr);
    // see there is a problem we cant able to bind the data from the template
    // and store it in the list
    // we need two way binding because we cant change the data from the template 
  }
  RemoveItem(idx: any) {
    this.list.splice(idx, 1);
  }
}
