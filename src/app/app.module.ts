import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { GameCardComponent } from './game-card/game-card.component';
import { GameListComponent } from './game-list/game-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    GameCardComponent,
    GameListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, OverlayModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
