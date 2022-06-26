import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  cust:boolean = true;
  editcust:boolean = false;
  slideIndex:any = 1;

 
  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit(): void {
    console.log(this.cust);
    this.apiService.getcustomerbyloginId(102).subscribe((data:any)=>{

    });
    
    
  }

  editcustfunc(){
    this.cust = false;
    this.editcust = true;
  }

  logout(){
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('usename');
    this.router.navigate(['login']);
  }
}
