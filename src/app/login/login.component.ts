import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';
// import { AuthService } from '../services/AuthService';
import { User } from '../model/user.model';
//import { User } from '../core/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user!:User;
  loginForm!: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  // loginForm!: FormGroup;
  // invalidLogin: boolean = false;
  // constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  // onSubmit() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   const loginPayload = {
  //     username: this.loginForm.controls['username'].value,
  //     password: this.loginForm.controls['password'].value
  //   }
  //   this.apiService.login(loginPayload).subscribe(data => {
  //     debugger;
  //     if(data.status === 200) {
  //       window.localStorage.setItem('token', data.result.token);
  //       this.router.navigate(['list-user']);
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value
    }
    this.apiService.login(loginPayload).subscribe((data:any)=>{
      //debugger;
      if(data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
       //this.router.navigate(['list-user']);
       console.log(data.result.username);
       this.getUser(data.result.username);
       

      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }


   getUser(name:string) {
    this.apiService.getUsername(name).subscribe(data=>{this.user=data;
    console.log(data.result.role);
    if(data.result.role==='USER')
    this.router.navigate(['listtour'])
   });
      // (data:User)=>{this.user=data;
    
     // if(this.user.role==='USER')
       //this.router.navigate(['listtour'])
      // else if(this.user.role==='ADMIN')
      // this.router.navigate(['admin-dashboard'])

      }
    
}



