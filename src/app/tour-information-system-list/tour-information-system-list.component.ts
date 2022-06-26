import { Component, OnInit ,inject} from '@angular/core';
import { Router } from '@angular/router';
import { AdminAddService } from '../admin-add.service';
import {Tour} from '../tour'

@Component({
  selector: 'app-tour-information-system-list',
  templateUrl: './tour-information-system-list.component.html',
  styleUrls: ['./tour-information-system-list.component.css']
})
export class TourInformationSystemListComponent implements OnInit {
  
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
  deleteTour(tour: Tour): void {
    //  this.router.navigate(['edittour']);
     location.reload();
    // alert("package has deleted Successfully");
    this.apiService.deleteTourById(tour.packageId)
      .subscribe( data => {
        this.tours = this.tours.filter(t => t !== tour);
        // window.location.assign("http://localhost:55278/listtour")
        //  this.router.navigate(['listtour']);
      })
  };

  editTour(tour: Tour): void {
    window.localStorage.removeItem("editPackageId");
    window.localStorage.setItem("editPackageId", tour.packageId.toString());
    console.log("this is package"+tour.packageId)
    this.router.navigate(['edittour']);
  };
 

}
