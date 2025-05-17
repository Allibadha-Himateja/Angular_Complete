import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  str: string = "";
  list: string[] = ['hi'];

  prod: Product = new Product() ;
  ProdList: Product[] = [];
  PrintStr() {
    //this.list.push(this.str);
    //this.str = "";
    console.log(this.str);
  }
  PrintProduct() {
    console.log(this.prod.id + " " + this.prod.name + " " + this.prod.price);
  }
}
class Product
{
  public id: number = 0;
  public name: string = '';
  public price: string = '';
  constructor() { }
}
