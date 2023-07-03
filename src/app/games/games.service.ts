import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  callAPI = function (
    http: HttpClient,
    endpoint: string
  ): Observable<any[]> {
    let headers = new HttpHeaders({
      'x-rapideapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '79c75eb211mshb564487928aea55p1d8226jsn01360c399d44',
    });
  
    const basicURI: string =
      'https://free-to-play-games-database.p.rapidapi.com/api/';
  
    return http.get<any>(`${basicURI}${endpoint}`, {
      headers: headers,
    });
  };

  showMoreGames(maxNbShownGames: number, myGamesList: any[], myGamesData: any[]) {
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

/* Use the API method callAPI with 2 parameters: 
    - the this.http: HttpClient defined in the component constructor,
    - the endpoint, which is the specific part or request that you want to access from the API. The beggining of the API URI is 
    already ready to use and will autocomplete. 
    
    Example : callAPI(this.http, 'games'); 

    -----------------------------------------------------

    API call basic code

    callAPI(this.http, 'games').subscribe((data) => {
      this.savedData = data;
      console.log(data);
     }
*/