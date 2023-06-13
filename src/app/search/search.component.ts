import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { callAPI } from '../api-config/config';
// import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm: string = '';
  selectPlat:string ='';
  sortGame:string = '';



  games: any[] = [];
  searchArray: string[] = ['pc', 'browser', 'all'];
  sortArray: string[] = [
    'release-date',
    'popularity',
    'alphabetical',
    'relevance',
  ];
  // catArray: string[] = [
  //   'mmorpg',
  //   'shooter',
  //   'strategy',
  //   'moba',
  //   'racing',
  //   'sports',
  //   'social',
  //   'sandbox',
  //   'open-world',
  //   'survival',
  //   'pvp',
  //   'pve',
  //   'pixel',
  //   'voxel',
  //   'zombie',
  //   'turn-based',
  //   'first-person',
  //   'third-Person',
  //   'top-down',
  //   'tank',
  //   'space',
  //   'sailing',
  //   'side-scroller',
  //   'superhero',
  //   'permadeath',
  //   'card',
  //   'battle-royale',
  //   'mmo',
  //   'mmofps',
  //   'mmotps',
  //   '3d',
  //   '2d',
  //   'anime',
  //   'fantasy',
  //   'sci-fi',
  //   'fighting',
  //   'action-rpg',
  //   'action',
  //   'military',
  //   'martial-arts',
  //   'flight',
  //   'low-spec',
  //   'tower-defense',
  //   'horror',
  //   'mmorts',
  // ];
  // public isMobileLayout = false;
  // ngOnInit() {
  //   window.onresize = () => (this.isMobileLayout = window.innerWidth <= 768);
  // }

  
 

  
  constructor(private http: HttpClient) {}

  // checkBoxForm = this.fb.group({
  //   mmorpg: [],
  //   shooter: [],
  //   strategy: [],
  //   moba: [],
  //   racing: [],
  //   sports: [],
  //   social: [],
  //   sandbox: [],
  //   openWorld: [],
  //   survival: [],
  //   pvp: [],
  //   pve: [],
  //   pixel: [],
  //   voxel: [],
  //   zombie: [],
  //   turnBased: [],
  //   firstPerson: [],
  //   thirdPerson: [],
  //   topDown: [],
  //   tank: [],
  //   space: [],
  //   sailing: [],
  //   sideScroller: [],
  //   superhero: [],
  //   permadeath: [],
  //   card: [],
  //   battleRoyale: [],
  //   mmo: [],
  //   mmofps: [],
  //   mmotps: [],
  //   threeD: [],
  //   twoD: [],
  //   anime: [],
  //   fantasy: [],
  //   sciFi: [],
  //   fighting: [],
  //   actionRpg: [],
  //   action: [],
  //   martialArts: [],
  //   flight: [],
  //   lowSpec: [],
  //   towerDefense: [],
  //   horror: [],
  //   mmorts: [],
  // });

  search(): void {
    if (this.selectPlat && this.sortGame) {
      

      callAPI(this.http, 'games?platform='+ this.selectPlat + '&sort-by='+ this.sortGame).subscribe(
        (data) => {
          console.log('API response:', data);
          this.games = data;
        } 
      );
    } 
    
   
    else if(this.sortGame){
      callAPI(this.http, 'games?sort-by=' +this.sortGame).subscribe((data) =>{
        console.log('API platform', data)
        this.games =data;
      });
    }
    else  if (this.selectPlat) {
      console.log('Search term:', this.selectPlat);

      callAPI(this.http, 'games?platform=' + this.selectPlat).subscribe(
        (data) => {
          console.log('API response:', data);
          this.games = data;
        }
      );
    } 
    else {
      this.games = [];
    }
  }
  }