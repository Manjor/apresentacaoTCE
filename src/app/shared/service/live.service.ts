import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import {Live} from '../model/live.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  httpOptions = {};
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.getToken();
  }

  public getToken(): any {
    const user = JSON.parse(localStorage.getItem('userData'));
    console.log(user);
    if (user !== null){
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }).set('Authorization', 'Bearer ' + user.access_token)
      };
    }else{
      this.router.navigate(['/login']);
    }
  }
  public getLives(page = 0): Observable<ResponsePageable>{
    page = page + 1;
    return this.httpClient.get<ResponsePageable>(`https://todo-codes.herokuapp.com/api/tasks?page=${page}`, this.httpOptions);
  }

  public doneTask(id: number): Observable<unknown>{
    return this.httpClient.get(`https://todo-codes.herokuapp.com/api/tasks/done/${id}`, this.httpOptions);
  }

  public createTask(task: Live): Observable<unknown>{
    if (task.id){
      return this.httpClient.put(`https://todo-codes.herokuapp.com/api/tasks/${task.id}`, task, this.httpOptions);
    }else{
      return this.httpClient.post(`https://todo-codes.herokuapp.com/api/tasks`, task, this.httpOptions);
    }
  }

  public getDone(page = 0): Observable<ResponsePageable>{
    page = page + 1;
    return this.httpClient.get<ResponsePageable>(`https://todo-codes.herokuapp.com/api/tasks/true?page=${page}`, this.httpOptions);
  }

  public deleteTask(id: number): Observable<unknown>{
    return this.httpClient.delete(`https://todo-codes.herokuapp.com/api/tasks/${id}`, this.httpOptions);
  }

}
