import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder){}

  loginForm: any = this.fb.group({
    id: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void{}

  onSubmit(): void{
    console.log('Logging in')
  }
}
