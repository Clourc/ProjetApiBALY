import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = this.userService.isLoggedIn;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
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
