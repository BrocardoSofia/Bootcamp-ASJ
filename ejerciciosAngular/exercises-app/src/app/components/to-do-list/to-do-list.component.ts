import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})

export class ToDoListComponent {
  task: string = "";
  taskList: Task[] = [];

  addTask(){
    if(this.task !== "")
    {
      this.taskList.push(new Task(this.task, new Date()));
      this.task = "";
    }
  }

  removeTask(index: number){
    this.taskList[index].selected=true;
  }
}

class Task{
	taskName: string;
	date: Date;
	selected: boolean;

  constructor(taskName: string, date: Date)
  {
    this.taskName = taskName;
    this.date = date;
    this.selected = false;
  }
}
