import { Component } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

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
  formLogin = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })
  fbLogin() {
    console.log(this.formLogin.value);
  }

}

