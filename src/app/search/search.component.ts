import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callAPI } from '../api-config/config';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit{
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  searchTerm: string = '';
  selectPlat: string = '';
  sortGame: string = '';
  games: any[] = [];

  public isMobileLayout = false;
  
  ngOnInit() {
    this.isMobileLayout = window.innerWidth <= 768
    window.onresize = () => (this.isMobileLayout = window.innerWidth <= 768);
  }

  searchArray: string[] = ['pc', 'browser', 'all'];
  sortArray: string[] = [
    'release-date',
    'popularity',
    'alphabetical',
    'relevance',
  ];

  catArray: string[] = [
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'openWorld',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turnBased',
    'firstPerson',
    'thirdPerson',
    'topDown',
    'tank',
    'space',
    'sailing',
    'sideScroller',
    'superhero',
    'permadeath',
    'card',
    'battleRoyale',
    'mmo',
    'mmofps',
    'mmotps',
    'threeD',
    'twoD',
    'anime',
    'fantasy',
    'sciFi',
    'fighting',
    'actionRpg',
    'action',
    'martialArts',
    'flight',
    'lowSpec',
    'towerDefense',
    'horror',
    'mmorts'
  ];

  mobileForm = this.fb.group({
    category: this.catArray[0]
  });

  checkBoxForm = this.fb.group({
    mmorpg: [false],
    shooter: [false],
    strategy: [false],
    moba: [false],
    racing: [false],
    sports: [false],
    social: [false],
    sandbox: [false],
    openWorld: [false],
    survival: [false],
    pvp: [false],
    pve: [false],
    pixel: [false],
    voxel: [false],
    zombie: [false],
    turnBased: [false],
    firstPerson: [false],
    thirdPerson: [false],
    topDown: [false],
    tank: [false],
    space: [false],
    sailing: [false],
    sideScroller: [false],
    superhero: [false],
    permadeath: [false],
    card: [false],
    battleRoyale: [false],
    mmo: [false],
    mmofps: [false],
    mmotps: [false],
    threeD: [false],
    twoD: [false],
    anime: [false],
    fantasy: [false],
    sciFi: [false],
    fighting: [false],
    actionRpg: [false],
    action: [false],
    martialArts: [false],
    flight: [false],
    lowSpec: [false],
    towerDefense: [false],
    horror: [false],
    mmorts: [false],
  });

  search(): void {
    if (this.selectPlat && this.sortGame) {
      callAPI(
        this.http,
        'games?platform=' + this.selectPlat + '&sort-by=' + this.sortGame
      ).subscribe((data) => {
        console.log('API response:', data);
        this.games = data;
      });
    } else if (this.sortGame) {
      callAPI(this.http, 'games?sort-by=' + this.sortGame).subscribe((data) => {
        console.log('API platform', data);
        this.games = data;
      });
    } else if (this.selectPlat) {
      console.log('Search term:', this.selectPlat);

      callAPI(this.http, 'games?platform=' + this.selectPlat).subscribe(
        (data) => {
          console.log('API response:', data);
          this.games = data;
        }
      );
    } else {
      this.games = [];
    }
  }

  onMobileSubmit(){
    console.table(this.mobileForm.value);
    return this.search();
  }

  onDesktopSubmit(){
    console.table(this.checkBoxForm.value)
    return this.search();
  }
}


