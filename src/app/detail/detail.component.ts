import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callAPI } from '../api-config/config';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private http: HttpClient) {}
  screenshotArray :any[] = [];
  gameDetails : any;
    ngOnInit(): void {
    callAPI(this.http, 'game?id=32').subscribe((data) => {
      console.log(data);
      this.gameDetails = data ;
      for( let i=0; i<this.gameDetails.screenshots.length; i++){
        this.screenshotArray.push(this.gameDetails.screenshots[i])
      }

    });
    console.log(this.gameDetails)
    console.log(this.screenshotArray)
  }
 

  // screenshotDisplay(gameDetails :any){
  //   if (gameDetails.platform === "Windows"){
  //     for (let i=0; i<gameDetails.screenshot.length ; i++){
  //       return gameDetails.screenshot.image[i]
  //     }
  //   }

  // }

}
