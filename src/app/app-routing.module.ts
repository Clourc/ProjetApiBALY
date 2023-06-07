import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { DetailComponent } from './detail/detail.component';
import { MentionsComponent } from './mentions/mentions.component';

const routes: Routes = [
  { path: '', component: GameListComponent},
  { path: 'game/:id', component: DetailComponent},
  { path: 'mentions', component: MentionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
