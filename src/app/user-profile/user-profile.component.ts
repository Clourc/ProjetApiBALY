import { Component, OnInit } from '@angular/core';
import { callAPI } from '../api-config/config';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}
  user: User = new User('Not found', 'password', '', [], '');
  favoriteGames: any[] = [];

  ngOnInit(): void {
    if (this.userService.user) {
      this.user = this.userService.user;
    }
    this.userService.isLoggedIn = true;
    callAPI(this.http, 'games').subscribe((data) => {
      for (let favorite of this.user.favoriteGamesIds) {
        this.favoriteGames.push(data.filter((game) => game.id == favorite)[0]);
      }
      console.table(this.favoriteGames);
    });
  }

  onSubmitId(Id_Form: NgForm) {
    return this.userService.onSubmitId(Id_Form);
  }

  onSubmitEmail(Email_Form: NgForm) {
    return this.userService.onSubmitEmail(Email_Form);
  }

  onSubmitPassword(Password_Form: NgForm) {
    return this.userService.onSubmitPassword(Password_Form);
  }

  onSubmitImg(Img_Form: NgForm) {
    return this.userService.onSubmitImg(Img_Form);
  }

  logout() {
    return this.userService.logout();
  }
}
