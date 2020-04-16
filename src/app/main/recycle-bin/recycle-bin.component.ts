import { MainService } from './../main.service';
import { Task } from './../../models/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recycle-bin',
  templateUrl: './recycle-bin.component.html',
  styleUrls: ['./recycle-bin.component.less']
})
export class RecycleBinComponent implements OnInit {

  deletedTasks: Task[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.deletedTasks = this.mainService.deletedTasks;
  }

  deleteTasks(task: Task) {
    this.mainService.deleteTask(task.id).subscribe(data => {
      const taskIndex = this.mainService.deletedTasks.findIndex(ele => ele.id === task.id);
      if (taskIndex !== -1) {
        this.mainService.deletedTasks.splice(taskIndex, 1);
      }
    }, error => {
      console.error(error);
    });
  }

  restoreTask(task: Task) {
    task.deleted = false;
    this.mainService.updateTask(task).subscribe(updatedTask => {
      const tasks = this.mainService.deletedTasks;
      const taskId = tasks.findIndex(ele => ele.id === task.id);
      if (taskId !== -1) {
        tasks.splice(taskId, 1);
      }
      this.mainService.todoTasks.push(updatedTask);
    }, error => {
      console.error(error);
    });
  }

}
