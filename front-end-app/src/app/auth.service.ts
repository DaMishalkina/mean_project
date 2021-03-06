import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
// import objectContaining = jasmine.objectContaining;
// import {HttpClient} from "@angular/common";
import {tokenNotExpired} from "angular2-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;

  constructor(private http: HttpClient) { }



  registerUser (user): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'account/reg',
      user,
      {headers: headers});
  }

  authUser (user): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'account/auth',
      user,
      {headers: headers});
  }

  storeUser(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  logout(){
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  isLoggedIn(){
    return tokenNotExpired();
  }
}

