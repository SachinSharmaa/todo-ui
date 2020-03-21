import { MainService } from './main.service';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  bootstrap: [MainComponent],
  providers: [MainService]
})
export class MainModule { }
