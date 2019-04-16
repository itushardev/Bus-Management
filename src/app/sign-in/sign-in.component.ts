import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent{

	// enroll = '';
	// password = '';

  form_insert_msg: String = '';
  token=null;

   form = new FormGroup({
    // full_name: new FormControl('', Validators.required),
    enroll: new FormControl('', Validators.required),
    // phone: new FormControl('',[ Validators.required,
      // Validators.pattern('[0-9]{10}')
      // ]),
    password: new FormControl('', Validators.required),
    // person: new FormControl('', Validators.required)
  });
  constructor(private httpClient: HttpClient) { 
    // this.reloadData();
    this.token = window.localStorage.getItem('token');
  }
  title = 'app';



   signin() {
    console.log(this.form.value);
    console.log('"calling singin function"');
    this.httpClient.post('http://localhost:3000/users_api/check',
      this.form.value)
      .subscribe(
       (data: any) => {
        // if(data.succ===true){
          console.log(data);
          console.log(data.token);
          console.log(data.f_name);
          if (data.succ===false) {


            this.form_insert_msg = 'Either enroll or password is incorrect';
          } else {
            // console.log(data[0].person);
            // console.log(data[0]);
            this.form_insert_msg = 'Successfull Sign In!';
            
            window.localStorage.setItem('token',data.token);
            window.localStorage.setItem('f_name',data.f_name);
            window.localStorage.setItem('l_name',data.l_name);
            window.localStorage.setItem('person',data.person);
            window.localStorage.setItem('busNo',data.busNo);
         
            if(data.person == "Student"){
            setTimeout(function(){
              window.location.href="http://localhost:4200/busRoutes";
              // res.redirect("/signIn");
            },2000);
            }
            else if(data.person == "Admin")
            {
              setTimeout(function(){
              window.location.href="http://localhost:4200/admin";
              // res.redirect("/signIn");
            },2000); 
            }
            else
            {
              setTimeout(function(){
              // window.location.href="http://localhost:4200/driver?name="+data[0].full_name;
              window.location.href="http://localhost:4200/driver";
              // res.redirect("/signIn");
            },2000); 
              
            }
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

  // students = [
  // 	{'enroll':'01513303116','password':'tushar@123'}
  // ];

  // validation(){
  // 	console.log(this.students[0].enroll);
  // 	console.log(this.students[0].password);
  // 	console.log(this.enroll);
  // 	console.log(this.password);
  // 	if(this.students[0].enroll == this.enroll && 
  // 		this.students[0].password == this.password){
  // 		window.location.href='/busRoutes';
  		// this.enroll='';
  		// this.password='';
  // }
  	
  	// else{
  	// 	alert('wrong');
  		// this.enroll='';
  		// this.password='';
  	// }
  // }

  // ngOnInit() {
  // }

}
