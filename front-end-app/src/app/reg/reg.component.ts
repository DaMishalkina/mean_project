import { Component, OnInit } from '@angular/core';
import {CheckFormService} from "../check-form.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  name: String;
  login: String;
  email: String;
  password: String;

  constructor(private checkForm: CheckFormService,
              private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }
  userRegisterClick(){
    const user = {
      name: this.name,
      email: this.email,
      login: this.login,
      password: this.password
    };

    if (!this.checkForm.checkName(user.name)){
      this.flashMessages.show('Имя пользователя не введено!', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      console.log('Имя пользователя не введено!');
      return false;
    }  else if (!this.checkForm.checkLogin(user.login)){
      this.flashMessages.show('Логин пользователя не введен!', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      console.log('Логин пользователя не введен!');
      return false;
    } else if (!this.checkForm.checkEmail(user.email)){
      this.flashMessages.show('Email пользователя не введен!', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      console.log('Email пользователя не введен!');
      return false;
    } else if (!this.checkForm.checkPassword(user.password)){
      this.flashMessages.show('Пароль пользователя не введен!', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      console.log('Пароль пользователя не введен!');
      return false;
    }
  }

}
