import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = this.userService.isLoggedIn;
  isSmallMobileLayout = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.isSmallMobileLayout = window.innerWidth <= 540;
    window.onresize = () => (this.isSmallMobileLayout = window.innerWidth <= 540)

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val.url);
        this.reloadHeader();
      }
    });
  }

  reloadHeader() {
    this.isLoggedIn = this.userService.isLoggedIn;
  }
}
