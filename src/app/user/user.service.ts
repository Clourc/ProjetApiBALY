import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AbstractControl, NgForm, ValidationErrors } from '@angular/forms';
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
    alert('New account created !');
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
      alert(`Id updated to ${Form.value.userId} !`);
      this.user.id = Form.value.userId;
    }
  }

  onSubmitEmail(Form: NgForm) {
    console.log(Form.value);
    if (this.user) {
      alert(`Email address updated to ${Form.value.userEmail} !`);
      this.user.emailAddress = Form.value.userEmail;
    }
  }

  onSubmitPassword(Form: NgForm) {
    console.log(Form.value);
    if (Form.value.userPassword === Form.value.userPasswordCheck) {
      if (this.user) {
        alert(`Password updated to ${Form.value.userPassword} !`);
        this.user.password = Form.value.userPassword;
      }
    } else {
      alert("Both passwords doesn't match");
    }
  }

  onSubmitImg(Img_Form: NgForm) {
    console.log(Img_Form.value);
    if (this.user) {
      alert(`Profile Picture updated to ${Img_Form.value.userId} !`);
      this.user.profilePicture = Img_Form.value.userImg;
    }
  }

  // Custom form validator
  passwordMatching(
    control: AbstractControl
  ): ValidationErrors | null {
    const password: string = control.value.password;
    const confirmPassword: string = control.value.confirmPassword;
    if (password === confirmPassword) {
      return null;
    } else {
      return { mustMatch: "The passwords doesn't match" };
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

