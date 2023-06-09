import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callAPI } from '../api-config/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  public href: string = '';
  screenshotArray: any[] = [];
  gameDetails: any;
  isOpen: boolean = false;
  overlayImageLink: string = '';

  ngOnInit(): void {
    const gameID = this.router.url.split('/').pop()
    callAPI(this.http, `game?id=${gameID}`).subscribe((data) => {
      this.gameDetails = data;
      console.log(this.gameDetails)
      for (let i = 0; i < this.gameDetails.screenshots.length; i++) {
        this.screenshotArray.push(this.gameDetails.screenshots[i]);
      }
    });
  }

  getOverlayImage(screenshot: string){
    this.overlayImageLink = screenshot;
    console.log(this.overlayImageLink);
  }

}
