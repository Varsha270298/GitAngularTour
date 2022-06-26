import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() cust:boolean = false;
  @Input() editcust:boolean = false;
  cancelbutton:boolean=false;

  sampleForm = new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    userId:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    mobileNo:new FormControl('',Validators.maxLength(10)),
    age:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    cpassword:new FormControl('',Validators.required),
 });
  get firstName(){
    return this.sampleForm.get('firstName') 
  }
  get lastName(){
    return this.sampleForm.get('lastName') 
  }
  get userId(){
    return this.sampleForm.get('userId') 
  }


  get mobileNo(){
    return this.sampleForm.get('mobileNo') 
  }

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    console.log(this.cust);
    
    // this.sampleForm.controls['username'].setValue()
    this.http.get<any>('http://localhost:8282/customer/id/aaa').subscribe(data => {

    });
    this.sampleForm.controls.firstName.setValue(window.localStorage.getItem('usename'));
  }
  cancel(){
    console.log('cancel');
    // $('#').val();
    // document.getElementById('visible').a
    this.cancelbutton = true;
  }

  display(){
      if(this.sampleForm.controls.password.value !== this.sampleForm.controls.cpassword.value ){
        alert('Password not matching')
        return;
      }
      let payload = {
        "age": this.sampleForm.controls.age.value,
        "firstName": window.localStorage.getItem('usename'),
        "gender": this.sampleForm.controls.gender.value,
        "lastName": this.sampleForm.controls.lastName.value,
        "mobileNo": this.sampleForm.controls.mobileNo.value,
        "password": this.sampleForm.controls.password.value,
        "userId": this.sampleForm.controls.userId.value
      }
      
      if(!this.sampleForm.valid){
        alert('Enter Valid Details..!');
        return;
      }
     this.http.post<any>('http://localhost:8282/customer/addcustomer', payload).subscribe(data => {
      debugger;
      //  console.log(data);
      //  if(data.status === 200){
      //   alert('Submitted sucessfully...!');
      //   this.router.navigate(['login']);
      //  }
    })
    alert('Submitted sucessfully...!');
    
    this.router.navigate(['customerdashboard']);
    
     document.getElementById("visible")?.classList.remove("is-visible");

  }

}
