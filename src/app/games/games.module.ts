import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { DetailComponent } from './detail/detail.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameListComponent } from './game-list/game-list.component';
import { SearchComponent } from './search/search.component';
import { RandomComponent } from './random/random.component';
import { SimilarGamesComponent } from './similar-games/similar-games.component';
import { CardFavComponent } from './card-fav/card-fav.component';


const gameRoutes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'game/:id', component: DetailComponent },
  { path: 'search', component: SearchComponent },
]

@NgModule({
  declarations: [
    DetailComponent,
    GameCardComponent,
    GameListComponent,
    SearchComponent,
    RandomComponent,
    SimilarGamesComponent,
    CardFavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    RouterModule.forChild(gameRoutes)
  ]
})
export class GamesModule { }
