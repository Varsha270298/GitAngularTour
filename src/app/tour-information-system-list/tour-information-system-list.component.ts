import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-information-system-list',
  templateUrl: './tour-information-system-list.component.html',
  styleUrls: ['./tour-information-system-list.component.css']
})
export class TourInformationSystemListComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  packages!: TourInformationSystem[];
  ngOnInit(): void {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers()
      .subscribe( (data: { result: TourInformationSystem[]; }) => {
          this.packages = data.result;
      });
  }

}
