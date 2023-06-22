import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = this.loginService.isLoggedIn;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val.url);
        this.reloadHeader();
      }
    });
  }

  reloadHeader() {
    this.isLoggedIn = this.loginService.isLoggedIn;
  }
}
