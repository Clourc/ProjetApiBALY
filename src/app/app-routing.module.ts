import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { CardFavComponent } from './card-fav/card-fav.component';
import { MentionsComponent } from './mentions/mentions.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RandomComponent } from './random/random.component';


const routes: Routes = [
  { path: '', component: GameListComponent},
  { path: 'game/:id', component: DetailComponent},
  { path:'search', component: SearchComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'mentions', component: MentionsComponent},
  { path: 'random', component: RandomComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
