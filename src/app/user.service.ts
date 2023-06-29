import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import defaultUser from './usersJson.json';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn: boolean = false;
  defaultUser = defaultUser
  users: User[] = [defaultUser];
  user!: User | undefined;

  constructor(private router: Router) {}

  signUp(signupForm: any){
    console.log('Signing up');
    const form = signupForm.value;
    const newUser = new User(form.id, form.passwords.password, "", [], form.email);
    console.log(newUser);
    
    this.users.push(newUser);
    alert('Nouvel utilisateur créé !');
    this.router.navigate(['/login']);
  }

  getUser(name: string) {
    this.user = this.users.filter((user) => user.id === name).pop();
  }

  login(name: string, password: string): Observable<boolean> {
    this.getUser(name);
    let isLoggedIn;
    if (this.user) {
      isLoggedIn = password == this.user.password;
    } else {
      isLoggedIn = false;
    }
    return of(isLoggedIn).pipe(
      delay(1000),
      tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.user = undefined;
    this.router.navigate(['/']);
  }

  onSubmitId(Form: NgForm) {
    console.log(Form.value);
    if (this.user) {
      this.user.id = Form.value.userId;
    }
  }

  onSubmitEmail(Form: NgForm) {
    console.log(Form.value);
    if (this.user) {
      this.user.emailAddress = Form.value.userEmail;
    }
  }

  onSubmitPassword(Form: NgForm) {
    console.log(Form.value);
    if (Form.value.userPassword === Form.value.userPasswordCheck) {
      if (this.user) {
        this.user.password = Form.value.userPassword;
      }
    } else {
      alert("Both passwords doesn't match");
    }
  }

  onSubmitImg(Img_Form: NgForm) {
    console.log(Img_Form.value);
    if (this.user) {
      this.user.profilePicture = Img_Form.value.userImg;
    }
  }
}

export class User {
  constructor(
    public id: string,
    public password: string,
    public profilePicture: string,
    public favoriteGamesIds: number[],
    public emailAddress: string
  ) {}
}
