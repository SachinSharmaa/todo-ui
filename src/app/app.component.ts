import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {

  title = 'todo-ui';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if ( this.authService.isLoggedIn() ) {
      this.router.navigate(['main']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
