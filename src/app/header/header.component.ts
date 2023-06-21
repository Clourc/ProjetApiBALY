import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showLoginButton: boolean = true;
  ngOnInit() {
    this.showLoginButton = !localStorage.getItem('isLoggedIn');
  }
}
