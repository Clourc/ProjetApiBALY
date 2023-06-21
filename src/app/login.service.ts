import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs'
import userJson from './usersJson.json';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  isLoggedIn: boolean = false;

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = name == userJson.id && password == userJson.password;
    return of(isLoggedIn).pipe(
      delay(1000),
      tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
    );
  }
}
