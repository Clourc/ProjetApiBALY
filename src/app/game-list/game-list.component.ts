import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callAPI } from '../api-config/config';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  constructor(private http: HttpClient) { }
  gamesToDisplay: any[] = [];
  maxNbShownGames: number = 10;
  savedData: any;

  ngOnInit(): void {
    callAPI(this.http, 'games').subscribe((data) => {
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
    for (let i = this.maxNbShownGames; i < this.maxNbShownGames + 10; i++) {
      this.gamesToDisplay.push(this.savedData[i]);
    }
  }
}

