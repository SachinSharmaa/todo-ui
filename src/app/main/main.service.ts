import { Task } from './../models/Task';
import { User } from './../models/User';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { HttpErrorService } from './../config/http-error.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class MainService {

  todoTasks: Task[];
  deletedTasks: Task[];
  activeUser: User;

  constructor(private httpErrorService: HttpErrorService, private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(environment.API_URL + 'user').pipe(
      catchError(this.httpErrorService.handleError)
    );
  }

  saveUser(user: User) {
    this.activeUser = user;
    this.todoTasks = this.activeUser.tasks.filter(task => !task.deleted);
    this.deletedTasks = this.activeUser.tasks.filter(task => task.deleted);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(environment.API_URL + 'task', task).pipe(
      catchError(this.httpErrorService.handleError)
    );
  }

  deleteTask(taskId: string): Observable<any> {
    return this.http.delete<any>(environment.API_URL + 'task/' + taskId).pipe(
      catchError(this.httpErrorService.handleError)
    );
  }
}
