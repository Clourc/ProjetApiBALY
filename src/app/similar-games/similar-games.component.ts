import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { callAPI } from '../api-config/config';

@Component({
  selector: 'app-similar-games',
  templateUrl: './similar-games.component.html',
  styleUrls: ['./similar-games.component.css'],
})
export class SimilarGamesComponent implements OnInit {
  constructor(private http: HttpClient) {}
  @Input() gameCategory: string = '';
  @Input() gameId!: number;
  similarGames: any[] = [];

  ngOnInit() {
    if (this.gameCategory === 'MMOARPG') {
      this.gameCategory = 'MMORPG';
    }
    callAPI(this.http, `games?category=${this.gameCategory}`).subscribe(
      (data) => {
        this.similarGames = data;
        this.removeCurrentGame(this.similarGames);
      }
    );
  }

  reloadDetails(){
    location.reload();
  }

  removeCurrentGame(array: any[]){
    array.splice(
      array.findIndex((x) => x.id === this.gameId),
      1
    );
    console.log(array);
  }
}
