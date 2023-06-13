import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { callAPI } from '../api-config/config';
import { getMaxId } from '../functions/functions';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent {
  constructor(private http: HttpClient, private router: Router) {}
  gameList: any[] = [];
  maxId!: number;
  randomGame: any;
  randomThumbnail: string = '';

  ngOnInit() {
    callAPI(this.http, 'games').subscribe((data) => {
      this.maxId = getMaxId(data);
      this.gameList = data;
      console.log(this.gameList);
    });
  }

  
  displayRandomThumbnail() {
    const randomArrayStart = Math.floor(Math.random() * this.gameList.length);
    let randomArrayEnd: number;
    let i = 0;
    
    if (randomArrayStart < this.gameList.length - 21) {
      randomArrayEnd = randomArrayStart + 20;
    } else {
      randomArrayEnd = randomArrayStart - 20;
    }
    
    const arrayPart = this.gameList.slice(randomArrayStart, randomArrayEnd);
    this.getRandomGame(this.maxId);
    arrayPart.push(this.randomGame);
    console.log(arrayPart);
    while(i < arrayPart.length) {
      this.thumbnailLoop(arrayPart, i);
      i++
    }
  }
  
  getRandomGame(maxId: any) {
    let goRandom = Math.floor(Math.random() * (maxId - 1) + 1);
    console.log(goRandom);
    if (this.gameList.some((game) => game.id === goRandom)) {
      this.randomGame = this.gameList.find((game) => game.id === goRandom);
      console.log(this.randomGame);
    } else {
      this.getRandomGame(this.maxId);
    }
  }

  thumbnailLoop(array: any[], i: number){
    setTimeout(() => {
      this.randomThumbnail = array[i].thumbnail;
      console.log(this.randomThumbnail);
    }, 300 * i);
  }
}
