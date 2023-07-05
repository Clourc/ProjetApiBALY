import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private http: HttpClient, private fb: FormBuilder, private gamesService: GamesService) {}
  callAPI = this.gamesService.callAPI;

  searchTerm: string = '';
  selectPlat: string = '';
  sortGame: string = '';
  gamesToDisplay: any[] = [];
  games: any[] = [];
  maxNbShownGames: number = 10;
  alphabetInput: string = '';
  showEmptySearchResult: boolean = false;

  public isMobileLayout = false;

  ngOnInit() {
    this.isMobileLayout = window.innerWidth <= 768;
    window.onresize = () => (this.isMobileLayout = window.innerWidth <= 768);
  }

  searchArray: string[] = ['pc', 'browser', 'all'];
  sortArray: string[] = [
    'release-date',
    'popularity',
    'alphabetical',
    'relevance',
  ];

  catArray: any[] = [
    { formC: 'mmorpg', query: 'mmorpg' },
    { formC: 'shooter', query: 'shooter' },
    { formC: 'strategy', query: 'strategy' },
    { formC: 'moba', query: 'moba' },
    { formC: 'racing', query: 'racing' },
    { formC: 'sports', query: 'sports' },
    { formC: 'social', query: 'social' },
    { formC: 'sandbox', query: 'sandbox' },
    { formC: 'openWorld', query: 'open-world' },
    { formC: 'survival', query: 'survival' },
    { formC: 'pvp', query: 'pvp' },
    { formC: 'pve', query: 'pve' },
    { formC: 'pixel', query: 'pixel' },
    { formC: 'voxel', query: 'voxel' },
    { formC: 'zombie', query: 'zombie' },
    { formC: 'turnBased', query: 'turn-based' },
    { formC: 'firstPerson', query: 'first-person' },
    { formC: 'thirdPerson', query: 'third-Person' },
    { formC: 'topDown', query: 'top-down' },
    { formC: 'tank', query: 'tank' },
    { formC: 'space', query: 'space' },
    { formC: 'sailing', query: 'sailing' },
    { formC: 'sideScroller', query: 'side-scroller' },
    { formC: 'superhero', query: 'superhero' },
    { formC: 'permadeath', query: 'permadeath' },
    { formC: 'card', query: 'card' },
    { formC: 'battleRoyale', query: 'battle-royale' },
    { formC: 'mmo', query: 'mmo' },
    { formC: 'mmofps', query: 'mmofps' },
    { formC: 'mmotps', query: 'mmotps' },
    { formC: 'threeD', query: '3d' },
    { formC: 'twoD', query: '2d' },
    { formC: 'anime', query: 'anime' },
    { formC: 'fantasy', query: 'fantasy' },
    { formC: 'sciFi', query: 'sci-fi' },
    { formC: 'fighting', query: 'fighting' },
    { formC: 'actionRpg', query: 'action-rpg' },
    { formC: 'action', query: 'action' },
    { formC: 'military', query: 'military' },
    { formC: 'martialArts', query: 'martial-arts' },
    { formC: 'flight', query: 'flight' },
    { formC: 'lowSpec', query: 'low-spec' },
    { formC: 'towerDefense', query: 'tower-defense' },
    { formC: 'horror', query: 'horror' },
    { formC: 'mmorts', query: 'mmorts' },
  ];

  mobileForm = this.fb.group({
    category: this.catArray[0],
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
    military: [false],
    martialArts: [false],
    flight: [false],
    lowSpec: [false],
    towerDefense: [false],
    horror: [false],
    mmorts: [false],
  });

  search(selectedCategories: any | any[]): void {
    let endpoint = selectedCategories.length > 1 ? 'filter' : 'games';
    const queryParams: string[] = [];
    this.games = [];
    this.gamesToDisplay = [];
    this.maxNbShownGames = 10;
    if (selectedCategories.length > 0) {
      const categoryParam = selectedCategories
        .map((category: any) => category.query)
        .join('.');

      if (selectedCategories.length > 1) {
        queryParams.push(`tag=${categoryParam}`);
      } else {
        queryParams.push(`category=${categoryParam}`);
      }
    }

    if (this.sortGame) {
      queryParams.push(`sort-by=${this.sortGame}`);
    }

    if (this.selectPlat) {
      queryParams.push(`platform=${this.selectPlat}`);
    }

    if (queryParams.length > 0) {
      endpoint += `?${queryParams.join('&')}`;
    }

    this.callAPI(this.http, endpoint).subscribe((data) => {
      this.games = data;
      this.filterGamesByAlphabet();
      if (this.games.length === 1) {
        this.gamesToDisplay = this.games;
      } else {
        for (let i = 0; i < this.maxNbShownGames; i++) {
          this.gamesToDisplay.push(this.games[i]);
        }
      }
    });
  }

  onDesktopSubmit() {
    const selectedCategories = this.catArray.filter(
      (category) => this.checkBoxForm.get(category.formC)?.value
    );

    console.table(this.checkBoxForm.value);
    return this.search(selectedCategories);
  }

  onMobileSubmit() {
    const selectedCategory = [this.mobileForm.value.category];

    console.log(selectedCategory);
    return this.search(selectedCategory);
  }

  filterGamesByAlphabet() {
    let filtered = this.games.filter((game) => {
      return game.title
        .toLowerCase()
        .includes(this.alphabetInput.toLowerCase());
    });
    this.gamesToDisplay = filtered;
    console.log('Filtered Games:', this.games);
  }

  showMoreGames(){
    this.maxNbShownGames += 10;
    return this.gamesService.showMoreGames(this.maxNbShownGames, this.gamesToDisplay, this.games)
  }
}
