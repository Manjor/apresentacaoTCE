import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponsePageable} from '../model/responsePageable.model';
import {Login} from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: 'https://todo-codes.herokuapp.com/api/auth/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public login(user: {}): Observable<Login>{
    return this.httpClient.post<Login>(`https://todo-codes.herokuapp.com/api/auth/login`,
      user, this.httpOptions);
  }
}
