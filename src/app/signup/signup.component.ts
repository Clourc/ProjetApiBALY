import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

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
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Signing up');
  }
}

export function passwordMatching(
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
