import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})

export class ToDoListComponent implements OnInit{
  task: string = "";
  taskList: Task[] = [];
  seeTaskType: number = 1;

  constructor(private toDoService: TodoService){}

  ngOnInit(): void {
    this.toDoService.getTasks().subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  addTask(){
    if(this.task !== "")
    {
      let taskToAdd: Task = {
        id: 0,
        taskName: this.task,
	      date: new Date(),
	      selected: false,
        deleted: false
      }

      this.toDoService.postTask(taskToAdd).subscribe(tasks => {
        this.taskList = tasks;
      });
      //this.taskList.push(taskToAdd);
      this.task = "";
    }
  }

  markTask(index: number){
    this.toDoService.selectTask(this.taskList[index]).subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  deleteTask(id: number){
    this.toDoService.deleteTask(id).subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  changeSeeTaskType(option: number){
    this.seeTaskType = option;
  }

  showTask(task: Task){
    let show = true;

    switch(this.seeTaskType)
    {
      case 2:
        show = (task.selected);
        break;

      case 3:
        show = (!task.selected && !task.deleted);
        break;

      case 4:
        show = (task.deleted);
        break;
    }

    return show;
  }

}