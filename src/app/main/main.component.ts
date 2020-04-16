import { Task } from './../models/Task';
import { User } from './../models/User';
import { MainService } from './main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  activeUser: User;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getUser().subscribe(user => {
      this.activeUser = user;
      this.mainService.saveUser(this.activeUser);
    },
      error => {
        console.error(error);
      });
  }

}
