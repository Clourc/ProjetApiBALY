import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { GameCardComponent } from './game-card/game-card.component';
import { GameListComponent } from './game-list/game-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    GameCardComponent,
    GameListComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, OverlayModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
