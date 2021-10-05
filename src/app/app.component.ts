import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Whirlpool MSU';
  name = "recipes"
  getname(){
    return this.name
  }
  obj = {
    name:"pork",
    amount: 20

  }
}
