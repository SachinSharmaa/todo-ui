import { Task } from './../../../models/Task';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faTrash, faHistory } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  @Input() tasks: Task[];
  @Output() deleteClicked = new EventEmitter<Task>();
  @Output() updateClicked = new EventEmitter<Task>();
  @Output() restoreClicked = new EventEmitter<Task>();

  faTrash = faTrash;
  faHistory = faHistory;
  isToDO: boolean;
  deleteTitle: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.isToDO = this.route.snapshot.component.name === 'TodoListComponent';
    this.deleteTitle = this.isToDO ? 'Move to RecycleBin' : 'Delete';
  }

  onDelete(task: Task) {
    this.deleteClicked.emit(task);
  }

  onUpdate(task: Task) {
    this.updateClicked.emit(task);
  }

  onRestore(task: Task) {
    this.restoreClicked.emit(task);
  }
}
