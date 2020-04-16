import { RecycleBinComponent } from './recycle-bin/recycle-bin.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',
  component: MainComponent,
  children: [
    {
      path: 'recycle-bin',
      component: RecycleBinComponent
    },
    {
      path: '',
      component: TodoListComponent
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
