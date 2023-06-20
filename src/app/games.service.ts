import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  showMoreGames(maxNbShownGames: number, myGamesList: any[], myGamesData: any[]) {
    maxNbShownGames += 10;
    for (let i = maxNbShownGames; i < maxNbShownGames + 10; i++) {
      if (myGamesData[i] != undefined) {
        myGamesList.push(myGamesData[i]);
      }
    }
    console.table(myGamesData);
  }

  getMaxId = (array: any[]): number => {
    return Math.max.apply(
      Math,
      array.map(function (game) {
        return game.id;
      })
    );
  };
}
