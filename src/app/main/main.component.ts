import { MainService } from './main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private  mainService: MainService) { }

  ngOnInit() {
    this.mainService.getUser().subscribe(user => {
      console.log(user);
    },
    error => {
      console.error(error);
    });
  }

}
