import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similar-games',
  templateUrl: './similar-games.component.html',
  styleUrls: ['./similar-games.component.css'],
})
export class SimilarGamesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private gamesService: GamesService,
    private router: Router
  ) {}
    callAPI = this.gamesService.callAPI;

  gamesData: any[] = [];
  maxNbShownGames: number = 9;
  @Input() gameGenre: string = '';
  @Input() gameId!: number;

  similarGames: any[] = [];

  ngOnInit() {
    this.rectifyGameGenre(this.gameGenre);

    this.callAPI(this.http, `games?category=${this.gameGenre}`).subscribe((data) => {
      this.gamesData = data;
      for (let i = 0; i < this.maxNbShownGames; i++) {
        this.similarGames.push(this.gamesData[i]);
      }
      this.removeCurrentGame(this.similarGames);
    });
  }

  showMoreGames() {
    this.maxNbShownGames += 10;
    return this.gamesService.showMoreGames(
      this.maxNbShownGames,
      this.similarGames,
      this.gamesData
    );
  }

  reloadDetails(gameId: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/game/' + gameId]);
    });
  }

  removeCurrentGame(array: any[]) {
    array.splice(
      array.findIndex((x) => x.id === this.gameId),
      1
    );
    console.log(array);
  }

  rectifyGameGenre(gameGenre: string){
    if (gameGenre === 'MMOARPG') {
      this.gameGenre = 'MMORPG';
    }
    if (gameGenre === 'ARPG') {
      this.gameGenre = 'action-rpg';
    }
    if (gameGenre === 'Action RPG') {
      this.gameGenre = 'action-rpg';
    }
    if (gameGenre === 'Battle Royale'){
      this.gameGenre = 'battle-royale';
    }
  }
}
