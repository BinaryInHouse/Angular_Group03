import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isUserLogged = false;

  constructor(private readonly authService: AuthService) {
    this.isUserLogged = this.authService.isUserLogged;

    this.authService.getStatusUser().subscribe(() => {
      this.isUserLogged = this.authService.isUserLogged;
    });
  }
}
