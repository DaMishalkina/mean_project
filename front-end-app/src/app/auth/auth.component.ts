import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {CheckFormService} from "../check-form.service";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login: String;
  password:String;

  constructor(private checkForm: CheckFormService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  userLoginClick(){
    const user = {
      login: this.login,
      password: this.password
    };

    if(user.password == undefined){
      this.flashMessages.show("Insert password", {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    }

    this.authService.authUser(user).subscribe(data => {
      if (!data.success){
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      } else {
        this.flashMessages.show("Success", {
          cssClass: 'alert-success',
          timeout: 4000
        });
        this.router.navigate(['dashboard']);
        this.authService.storeUser(data.token, data.user);
        }
    });
  }
}
