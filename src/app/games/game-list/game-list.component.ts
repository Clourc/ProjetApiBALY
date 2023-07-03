import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  constructor(private http: HttpClient, private gamesService: GamesService) { }
  callAPI = this.gamesService.callAPI;

  gamesToDisplay: any[] = [];
  maxNbShownGames: number = 10;
  savedData: any;

  ngOnInit(): void {
    this.callAPI(this.http, 'games').subscribe((data) => {
      this.savedData = data;
      console.log(data)
      if (data.length === 1) {
        this.gamesToDisplay.push(data);
      } else {
        for (let i = 0; i < this.maxNbShownGames; i++) {
          this.gamesToDisplay.push(data[i]);
        }
      }
    });
  }

  showMoreGames() {
    this.maxNbShownGames += 10;
    return this.gamesService.showMoreGames(this.maxNbShownGames, this.gamesToDisplay, this.savedData)
    }
}

