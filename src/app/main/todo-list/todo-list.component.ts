import { MainService } from './../main.service';
import { Task } from './../../models/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  todoTasks: Task[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.todoTasks = this.mainService.todoTasks;
  }

  moveToRecycleBin(task: Task) {
    task.deleted = true;
    this.mainService.updateTask(task).subscribe(updatedTask => {
      const tasks = this.mainService.todoTasks;
      const taskId = tasks.findIndex(ele => ele.id === task.id);
      if (taskId !== -1) {
        tasks.splice(taskId, 1);
      }
      this.mainService.deletedTasks.push(updatedTask);
    }, error => {
      console.error(error);
    });
  }

  updateDoneStatus(task: Task) {
    this.mainService.updateTask(task).subscribe(udatedTask => {
      // task already updated
    }, error => {
      console.error(error);
    });
  }

}
