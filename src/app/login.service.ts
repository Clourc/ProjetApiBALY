import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs'
import { GamesService } from './games.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  isLoggedIn: boolean = false;
  user = this.gamesService.user

  constructor(private gamesService: GamesService, private router: Router){}

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = name == this.user.id && password == this.user.password;
    return of(isLoggedIn).pipe(
      delay(1000),
      tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
    );
  }

  logout(){
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
