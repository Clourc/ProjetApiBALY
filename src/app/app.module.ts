import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import {OverlayModule} from '@angular/cdk/overlay';





@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



