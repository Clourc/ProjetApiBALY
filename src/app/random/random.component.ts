import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { callAPI } from '../api-config/config';
import { getMaxId } from '../functions/functions';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  constructor(private http: HttpClient, private router: Router) { }
  gameList: any[] = [];
  maxId!: number;

  ngOnInit() {
    callAPI(this.http, 'games').subscribe((data) => {
      this.maxId = getMaxId(data);
      this.gameList = data
      console.log(data)
    })
  }

  getRandomGame(maxId: any) {
    let goRandom = Math.floor(Math.random() * (maxId - 1) + 1);
    console.log(goRandom);
    if() {
      this.router.navigate([`game/${goRandom}`]);
    } else {
      this.getRandomGame(this.maxId);
    }
  }

  sortGameIds(array: any[]) {
    array.sort((element1: any, element2: any) => {
      return element1.id - element2.id
    })
    console.log(array)
  }

  ifGameExist(http: HttpClient, id: number) {
    return callAPI(http, `game/${id}`);
  }
}
