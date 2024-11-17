import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
  user = {
    name: "AsadUllah",
    age: 34
  };
  userLogin(item: any) {
    console.log(item);
  }
}
