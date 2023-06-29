import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { MentionsComponent } from './mentions/mentions.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RandomComponent } from './random/random.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CguComponent } from './cgu/cgu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { accessProfileGuard } from './access-profile.guard';

const routes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'game/:id', component: DetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'mentions', component: MentionsComponent },
  { path: 'random', component: RandomComponent },
  { path: 'cgu', component: CguComponent },
  {
    path: 'user',
    component: UserProfileComponent,
    canActivate: [accessProfileGuard]
  },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
