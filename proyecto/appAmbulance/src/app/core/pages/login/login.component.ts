import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  group: FormGroup;

  authService: AuthService;

  constructor(service: AuthService) {
    this.authService = service;
    this.setForm();
  }

  setForm(): void {
    this.group = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {}

  login(): void {
    const infoUser = this.group.value;
    this.authService.login(infoUser);
  }
}
