import { SharedModule } from './../shared/shared.module';
import { MainService } from './main.service';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RecycleBinComponent } from './recycle-bin/recycle-bin.component';



@NgModule({
  declarations: [MainComponent, TodoListComponent, RecycleBinComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  bootstrap: [MainComponent],
  providers: [MainService]
})
export class MainModule { }
