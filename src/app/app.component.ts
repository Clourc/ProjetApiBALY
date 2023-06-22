import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjetApiBALY';

  isLoggedIn: boolean = this.loginService.isLoggedIn;
  constructor(private loginService: LoginService){}

  setLoginStatus(isLoggedIn: boolean){
    this.isLoggedIn = isLoggedIn;
  }

}

