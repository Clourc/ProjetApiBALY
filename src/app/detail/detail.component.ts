import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callAPI } from '../api-config/config';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService:UserService
  ) {}
  screenshotArray: any[] = [];
  gameDetails: any;
  gameID: string | undefined = '';

  isOpen: boolean = false;
  overlayImageLink: string = '';

  userFavGames: number[] = [];

  ngOnInit(): void {
    if(this.userService.user){
      this.userFavGames = this.userService.user.favoriteGamesIds;
    }
    this.gameID = this.router.url.split('/').pop();
    callAPI(this.http, `game?id=${this.gameID}`).subscribe((data) => {
      this.gameDetails = data;
      console.log(this.gameDetails);
      for (let i = 0; i < this.gameDetails.screenshots.length; i++) {
        this.screenshotArray.push(this.gameDetails.screenshots[i]);
      }
    });
  }

  getOverlayImage(screenshot: string) {
    this.overlayImageLink = screenshot;
    console.log(this.overlayImageLink);
  }

  toggleFavGame() {
    if(this.userService.isLoggedIn){
      if (this.userFavGames.includes(this.gameDetails.id)) {
        this.userFavGames.splice(this.userFavGames.indexOf(this.gameDetails.id), 1);
        console.log(`Favorite game ${this.gameDetails.title} removed`);
      } else {
        this.userFavGames.push(this.gameDetails.id);
        console.log(`Added ${this.gameDetails.title} to favorites`);
      }
    } else {
      alert("You are not logged in");
    }
  }
}
