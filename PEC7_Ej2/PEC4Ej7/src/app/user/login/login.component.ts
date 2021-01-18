import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  public message: string = '';
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.userService.login(this.username, this.password).subscribe(
      (resp) => {
        console.log('Successfully logged in');
        this.message = resp.msg;
      },
      (err) => {
        console.error('Error logging in', err);
        this.message = err.error.msg;
      }
    );
  }
}
