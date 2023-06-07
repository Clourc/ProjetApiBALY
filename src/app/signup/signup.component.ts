import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import { passwordMatching } from '../formCustomValidators/customValidators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  signupForm: any = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(3)]],
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: passwordMatching,
      }
    ),
    email: ['', [Validators.required, Validators.email]],
    cgu: [false, Validators.requiredTrue]
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Signing up');
    console.log(this.signupForm)
  }
}