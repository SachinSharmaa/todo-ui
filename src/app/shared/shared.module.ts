// import { httpInterceptorProviders } from './config/http-interceptors/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './UI/card/card.component';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent]
})
export class SharedModule { }
