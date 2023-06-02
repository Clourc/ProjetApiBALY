import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callAPI } from './api-config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'ProjetApiBALY';

  ngOnInit(): void {

    callAPI(this.http, 'games'); /* Used callAPI with parameter this.http and end of URI. See config.ts for more details */

    
  }
}

