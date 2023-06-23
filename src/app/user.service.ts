import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs'
import { GamesService } from './games.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class UserService {
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

  onSubmitId(Form: NgForm) {
    console.log(Form.value);
    this.user.id = Form.value.userId;
  }

  onSubmitEmail(Form: NgForm){
    console.log(Form.value)
    this.user.emailAddress = Form.value.userEmail;
  }

  onSubmitPassword(Form: NgForm) {
    console.log(Form.value);
    if (Form.value.userPassword === Form.value.userPasswordCheck) {
      this.user.password = Form.value.userPassword;
    } else {
      alert("Both passwords doesn't match");
    }
  }

  onSubmitImg(Img_Form: NgForm) {
    console.log(Img_Form.value);
    this.user.profilePicture = Img_Form.value.userImg;
  }
}
