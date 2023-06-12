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

export function userLoginVerify(
    control: AbstractControl
): ValidationErrors | null {
    const formID: string = control.value.id;
    const formPassword: string = control.value.password;
    if(formID === usersJson.id && formPassword === usersJson.password){
        return null
    } else {
        return { wrongLogin : 'ID or Password incorrect'}
    }
}