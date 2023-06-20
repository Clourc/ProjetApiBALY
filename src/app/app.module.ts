import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { GameCardComponent } from './game-card/game-card.component';
import { GameListComponent } from './game-list/game-list.component';
import { SearchComponent } from './search/search.component';
import { CardFavComponent } from './card-fav/card-fav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { MentionsComponent } from './mentions/mentions.component';
import { RandomComponent } from './random/random.component';
import { SimilarGamesComponent } from './similar-games/similar-games.component';
import { CguComponent } from './cgu/cgu.component';
import { CookiesConsentComponent } from './cookies-consent/cookies-consent.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    GameCardComponent,
    GameListComponent,
    SearchComponent,
    CardFavComponent,
    FooterComponent,
    MentionsComponent,
    RandomComponent,
    LoginComponent,
    SignupComponent,
    SimilarGamesComponent,
    CguComponent,
    CookiesConsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
