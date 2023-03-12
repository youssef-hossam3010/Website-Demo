import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  registerationFormValidation = new FormGroup({
    name:new FormControl("",[Validators.required, Validators.minLength(3)]),
    age:new FormControl("",[Validators.required,Validators.min(20), Validators.max(40)]),
    email: new FormControl("",[Validators.required,Validators.email])
  })
  err :any;//[]


  get NameValid(){
    return this.registerationFormValidation.controls.name.valid;
  }

  get AgeValid(){
    return this.registerationFormValidation.controls.age.valid;
  }
  get emailValid(){
    return this.registerationFormValidation.controls.email.valid;

  }

  Show(){

    // console.log(this.registerationFormValidation);
    // console.log(this.registerationFormValidation.controls.name.errors);

    if(this.registerationFormValidation.valid){
      console.log("Trueeeee")//push
      alert("student successfully added")
    }else{
      console.log("--false--")
    }
  }
}

