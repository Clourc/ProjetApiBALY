import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import usersJson from '../usersJson.json';
import { userLoginVerify } from '../formCustomValidators/customValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = 'Se connecter'
  userLoggedIn: boolean = false;

  constructor(private fb: FormBuilder){}

  loginForm: any = this.fb.group({
    id: ['', Validators.required],
    password: ['', Validators.required]
  }, {
    validators: userLoginVerify 
  })

  ngOnInit(): void{
    console.log(usersJson);
  }

  onSubmit(): void{
    console.log('Logging in')
    this.title = `Bonjour ${usersJson.id}`;
    this.userLoggedIn = true;
    this.loginForm.reset();
  }
}
