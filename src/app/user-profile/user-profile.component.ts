import { Component, OnInit } from '@angular/core';
import userJson from '../usersJson.json';
import { callAPI } from '../api-config/config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  constructor(private http: HttpClient){}
  user = userJson;
  favoriteGames: any[] = [];

  ngOnInit(): void {
    localStorage.setItem('isLoggedIn', 'true');
    callAPI(this.http, 'games').subscribe(data => {
      for(let favorite of this.user.favoriteGamesIds){
        this.favoriteGames.push((data.filter((game) => game.id == favorite))[0]);
      }
      console.table(this.favoriteGames);
    })
  }
}
