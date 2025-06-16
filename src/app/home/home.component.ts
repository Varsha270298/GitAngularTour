import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITourInfo } from '../tourinfo/tourInfo';
import { TourinfoService } from '../tourinfo/tourinfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string="ReserevedPacakges";
  tourinfo!:ITourInfo[];
  private _listFilter:string="";
  filteredTour:ITourInfo[]= [];

  constructor(private tourservice:TourinfoService,private router:Router, private route: ActivatedRoute) { }
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value; 
    console.log('Setter value :',value);
    this.filteredTour=this.performFilter(value);
  }

  ngOnInit(): void {
    this.getAllPackages();
  }
  performFilter(filterBy:string): ITourInfo[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tourinfo.filter((t:ITourInfo) =>
    t.packageName.toLocaleLowerCase().includes(filterBy));
    } 
  getAllPackages(){
    this.tourservice.getAllReservedPackages().subscribe(
      data=>{this.tourinfo=data;console.log('getpackages: ' + JSON.stringify(data))}
    );
  }
  

}
