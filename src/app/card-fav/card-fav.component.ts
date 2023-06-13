import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { callAPI } from '../api-config/config';

@Component({
  selector: 'app-card-fav',
  templateUrl: './card-fav.component.html',
  styleUrls: ['./card-fav.component.css'],
})
export class CardFavComponent implements OnInit {
  @Input() game: any;
  

  constructor(private http: HttpClient, private router: Router) {}
  
  cardFavIds: number[] = [1, 475, 452, 58];
  gameFav: any[] = [];

  ngOnInit(): void {
    for (let gameId of this.cardFavIds) {
      callAPI(this.http, `game?id=${gameId}`).subscribe((data) => {
        this.gameFav.push(data);
      });
    }
    console.log(this.gameFav);
  }

  selectClick(gameId: number): void {
   
    this.router.navigate(['game', gameId]);
  }
}
