import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})

export class ToDoListComponent {
  task: string = "";
  taskList: Task[] = [];
  seeTaskType: number = 1;

  addTask(){
    if(this.task !== "")
    {
      this.taskList.push(new Task(this.task, new Date()));
      this.task = "";
    }
  }

  markTask(index: number){
    this.taskList[index].selected = (this.taskList[index].selected)?false:true;
  }

  deleteTask(index: number){
    this.taskList[index].deleted=true;
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

class Task{
	taskName: string;
	date: Date;
	selected: boolean;
  deleted: boolean;

  constructor(taskName: string, date: Date)
  {
    this.taskName = taskName;
    this.date = date;
    this.selected = false;
    this.deleted = false;
  }
}
