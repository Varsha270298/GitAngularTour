import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAddService } from '../admin-add.service';
<<<<<<< HEAD
import { Tour } from '../tour';

=======
import {Tour} from '../tour'
>>>>>>> d484de5b6e8f3ce34ebe04a158385609810c2505

@Component({
  selector: 'app-tour-information-system-list',
  templateUrl: './tour-information-system-list.component.html',
  styleUrls: ['./tour-information-system-list.component.css']
})
export class TourInformationSystemListComponent implements OnInit {
  packages!: Tour[];
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
<<<<<<< HEAD
      .subscribe( (data: { result: Tour[]; }) => {
          this.packages = data.result;
      });
=======
      .subscribe(
         data=>{console.log(data);
        this.tours=data}
      );
>>>>>>> d484de5b6e8f3ce34ebe04a158385609810c2505
  }

}
