import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private socialAuthService: AuthService ){  
  }
   
  @ViewChild('formRef') signupForm: NgForm;
  @ViewChild('emailInp') emailInp;
  defaultPet = 'pet';
  defaultName = 'pet';
  answer = '';
  genders = ['male', 'female']

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: 'Yolo'
      }
    })
  }

  onSubmit(form: NgForm){
    // console.log('Submitted!', form);
    console.log('Submitted!', this.signupForm);
    this.signupForm.reset();
  }


  // public socialSignIn(socialPlatform : string) {
  //   let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (userData) => {
  //       console.log(socialPlatform+" sign in data : " , userData);   
  //     }
  //   );
  // }
}
