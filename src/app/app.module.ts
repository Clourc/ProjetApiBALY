import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GamesModule } from './games/games.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CookiesConsentComponent } from './cookies-consent/cookies-consent.component';
import { UserModule } from './user/user.module';
import { MiscModule } from './misc/misc.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CookiesConsentComponent,
  ],
  imports: [
    BrowserModule,
    GamesModule,
    UserModule,
    MiscModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
