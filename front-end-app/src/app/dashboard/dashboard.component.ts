import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {CheckFormService} from "../check-form.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private checkForm: CheckFormService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logoutUser(){
  this.authService.logout();
  this.flashMessages.show('You have logged out', {
      cssClass: 'alert-warning',
      timeout: 4000
  });
  this.router.navigate(['auth']);
  return false;
  }

}
