import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { callAPI } from '../api-config/config';
import { Subscriber } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-fav',
  templateUrl: './card-fav.component.html',
  styleUrls: ['./card-fav.component.css'],
})
export class CardFavComponent implements OnInit {
  constructor(private http: HttpClient) {}
  cardFavIds: number[] = [1,475,452,58];
  gameFav: any[] = [];
 
  ngOnInit(): void {
    for (let gameId of this.cardFavIds) {
      callAPI(this.http, `game?id=${gameId}`).subscribe((data) => {
        this.gameFav.push(data);
      });
    }
    console.log(this.gameFav);
  }
}
