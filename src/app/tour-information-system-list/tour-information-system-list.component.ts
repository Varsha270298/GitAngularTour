<<<<<<< HEAD
=======
import { Token } from '@angular/compiler';
>>>>>>> 37da7fcacfcc415124dbd884b68156b4beffaa88
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTourComponent } from '../add-tour/add-tour.component';
import { AdminAddService } from '../admin-add.service';
import {Tour} from '../tour'

@Component({
  selector: 'app-tour-information-system-list',
  templateUrl: './tour-information-system-list.component.html',
  styleUrls: ['./tour-information-system-list.component.css']
})
export class TourInformationSystemListComponent implements OnInit {
  packages!: AddTourComponent[];
  constructor(private router: Router, private apiService: AdminAddService) { }

  

  tours!: Tour[];

  ngOnInit(): void {
    // if(!window.localStorage.getItem('token')) {
    //   this.router.navigate(['login']);
    //   return;
    // }
    // this.apiService.getTour()
    //   .subscribe(
    //      (data: { result: Tour[]; }) => {
    //       this.tours = data.result;
    //   });
    this.apiService.getTour()
      .subscribe(
         data=>{console.log(data);
        this.tours=data}
      );
  }

}
