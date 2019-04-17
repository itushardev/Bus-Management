import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { LoginValidatorService } '../login-validator.service'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form_insert_msg: String = '';
  // usersList: any;
  form = new FormGroup({
    f_name: new FormControl('', Validators.required),
    l_name: new FormControl('', Validators.required),
    enroll: new FormControl('', [Validators.required,Validators.min(113303116),
    	Validators.max(1513303116)
    	]),
    phone: new FormControl('',[ Validators.required,
    	// Validators.pattern('[0-9]{10}')
    	]),
    password: new FormControl('', Validators.required),
    person: new FormControl('', Validators.required)
  });
  constructor(private httpClient: HttpClient) { 
    // this.reloadData();
  }
  title = 'app';

  signup() {
    console.log(this.form.value);
    console.log('"calling singup function"');
    this.httpClient.post('https://bus-management-server-heroku.herokuapp.com/users_api/insert',
      this.form.value)
      .subscribe(
        (data: any) => {
          if (data.ok) {
            this.form.reset();
            this.form_insert_msg = 'Successfull Signup !';
            setTimeout(function(){
            	window.location.href="https://itushardev.github.io/Bus-Management/signIn";
              // res.redirect("/signIn");
            },2000);
          } else {
            this.form_insert_msg = 'Error while doing signup please try again';
          }
        }
      );
  }

  // reloadData() {
  //   this.httpClient.get('http://localhost:3000/users_api/get')
  //     .subscribe(
  //       (data: any[]) => {
  //         if (data.length <= 0) {
  //           this.usersList = 0;
  //         } else {
  //           this.usersList = data;
  //         }
  //       }
  //     );
  // }

  ngOnInit() {
  }

}
