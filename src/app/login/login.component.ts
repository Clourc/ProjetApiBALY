import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import usersJson from '../usersJson.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = '';
  password: string = '';
  loginMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    console.log(usersJson);
  }

  tryLogin(): void {
    console.log('Logging in');
    this.loginMessage = 'Connexion en cours...'
    this.userService
      .login(this.userId, this.password)
      .subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.router.navigate(['/user']);
        } else {
          this.loginMessage = 'Identifiant ou Mot de passe incorrect'
          this.password = '';
          this.router.navigate(['/login']);
        }
      });
  }
}





