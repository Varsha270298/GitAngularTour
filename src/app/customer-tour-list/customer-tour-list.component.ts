import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAddService } from '../admin-add.service';
import { Tour } from '../tour';

@Component({
  selector: 'app-customer-tour-list',
  templateUrl: './customer-tour-list.component.html',
  styleUrls: ['./customer-tour-list.component.css']
})
export class CustomerTourListComponent implements OnInit {
  tours!: Tour[];
  constructor(private router: Router, private apiService: AdminAddService) { }
    
  ngOnInit(): void {
    this.apiService.getTour()
      .subscribe(
         data=>{console.log(data);
        this.tours=data}
      );
  }
    Booking(){
      alert('Tour Has Been Booked Successfully');
 }
}
