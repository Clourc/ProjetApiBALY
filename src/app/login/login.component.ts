import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import usersJson from '../usersJson.json';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = '';
  password: string = '';
  loginMessage: string = '';

  @Output() loginOutput: EventEmitter<boolean> = new EventEmitter();

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    console.log(usersJson);
  }

  tryLogin(): void {
    console.log('Logging in');
    this.loginMessage = 'Connexion en cours...'
    this.loginService
      .login(this.userId, this.password)
      .subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.emitLogin(true);
          this.router.navigate(['/user']);
        } else {
          this.loginMessage = 'Identifiant ou Mot de passe incorrect'
          this.password = '';
          this.router.navigate(['/login']);
        }
      });
  }

  emitLogin(value: boolean){
    this.loginOutput.emit(value)
  }
}
