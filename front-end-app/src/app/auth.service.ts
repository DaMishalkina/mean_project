import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import {Http} from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser (user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/reg',
      user,
      {headers: headers}).pipe(map((response: any)=> response.json()));
  }
}
