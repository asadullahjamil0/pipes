import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { validateHeaderName } from 'http';

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
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  fbLogin() {
    console.log(this.formLogin.value);
  }
  get user1() {
    return this.formLogin.get('user');
  }
  get password() {
    return this.formLogin.get('password');
  }

}

