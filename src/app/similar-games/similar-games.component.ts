import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { callAPI } from '../api-config/config';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-similar-games',
  templateUrl: './similar-games.component.html',
  styleUrls: ['./similar-games.component.css'],
})
export class SimilarGamesComponent implements OnInit {
  constructor(private http: HttpClient, private gamesService: GamesService) {}
  gamesData: any[] = [];
  maxNbShownGames: number = 10;
  @Input() gameGenre: string = '';
  @Input() gameId!: number;

  similarGames: any[] = [];

  ngOnInit() {
    if (this.gameGenre === 'MMOARPG') {
      this.gameGenre = 'MMORPG';
    }
    if (this.gameGenre === 'ARPG') {
      this.gameGenre = 'action-rpg';
    }
    if (this.gameGenre === 'Action RPG') {
      this.gameGenre = 'action-rpg';
    }

    callAPI(this.http, `games?category=${this.gameGenre}`).subscribe(
      (data) => {
        this.gamesData = data;
        for (let i = 0; i < this.maxNbShownGames; i++) {
          this.similarGames.push(this.gamesData[i]);
        }
        this.removeCurrentGame(this.similarGames);
      }
    );
  }

  showMoreGames() {
  return this.gamesService.showMoreGames(this.maxNbShownGames, this.similarGames, this.gamesData )
  }

  reloadDetails() {
    location.reload();
  }

  removeCurrentGame(array: any[]) {
    array.splice(
      array.findIndex((x) => x.id === this.gameId),
      1
    );
    console.log(array);
  }
}
