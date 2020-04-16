// import { httpInterceptorProviders } from './config/http-interceptors/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './UI/card/card.component';
import { ListComponent } from './UI/list/list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CardComponent, ListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [CardComponent, ListComponent]
})
export class SharedModule { }
