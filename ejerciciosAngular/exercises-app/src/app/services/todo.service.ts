import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return new Observable<Task[]>(observer => {
      fetch('http://localhost:8080/tareas')
        .then(response => response.json())
        .then(data => {
          const tasks: Task[] = data;
          observer.next(tasks);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }

  public postTask(task: Task): Observable<Task[]> {
    let url = 'http://localhost:8080/tareas';
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Task[]>(url, task, { headers });
  }

  public deleteTask(id: number): Observable<Task[]> {
    let url = 'http://localhost:8080/tareas/'+id;
    const headers = { 'Content-Type': 'application/json' };
    return this.http.delete<Task[]>(url);
  }

  public selectTask(task: Task): Observable<Task[]> {
    task.selected = !task.selected;
    let url = 'http://localhost:8080/tareas/'+task.id;
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put<Task[]>(url, task, { headers });
  }
}

