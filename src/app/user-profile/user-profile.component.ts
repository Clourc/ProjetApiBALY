import { Component, OnInit } from '@angular/core';
import { callAPI } from '../api-config/config';
import { HttpClient } from '@angular/common/http';
import { GamesService } from '../games.service';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  constructor(private http: HttpClient, private gamesService: GamesService, private login: LoginService){}
  user = this.gamesService.user;
  favoriteGames: any[] = [];

  ngOnInit(): void {
    this.login.isLoggedIn = true;
    callAPI(this.http, 'games').subscribe(data => {
      for(let favorite of this.user.favoriteGamesIds){
        this.favoriteGames.push((data.filter((game) => game.id == favorite))[0]);
      }
      console.table(this.favoriteGames);
    });
  }

  onSubmitId(Id_Form: NgForm){
    console.log(Id_Form.value)
    this.user.id = Id_Form.value.userId;
  }

  onSubmitPassword(Password_Form: NgForm){
    console.log(Password_Form.value)
    this.user.password = Password_Form.value.userPassword;
  }

  onSubmitImg(Img_Form: NgForm){
    console.log(Img_Form.value)
    this.user.profilePicture = Img_Form.value.userImg;
  }

  logout(){
    return this.login.logout();
  }
}
