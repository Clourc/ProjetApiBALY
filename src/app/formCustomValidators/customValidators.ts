import { AbstractControl, ValidationErrors } from "@angular/forms";
import usersJson from '../usersJson.json'

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