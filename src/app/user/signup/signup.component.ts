import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  passwordMatching = this.userService.passwordMatching;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  signupForm: any = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(3)]],
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatching,
      }
    ),
    email: ['', [Validators.required, Validators.email]],
    cgu: [false, Validators.requiredTrue]
  });

  ngOnInit(): void {}

  onSubmit(): void {
    return this.userService.signUp(this.signupForm);
  }
}