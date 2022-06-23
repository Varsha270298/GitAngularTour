import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITourInfo } from '../tourinfo/tourInfo';
import { TourinfoService } from '../tourinfo/tourinfo.service';

@Component({
  selector: 'app-tourinfo-list',
  templateUrl: './tourinfo-list.component.html',
  styleUrls: ['./tourinfo-list.component.css']
})
export class TourinfoListComponent implements OnInit {
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
    return this.tourinfo.filter((product :ITourInfo) =>
    product.packageName.toLocaleLowerCase().includes(filterBy));
    }
   
  getAllPackages(){
    this.tourservice.getAllReservedPackages().subscribe(
      data=>{this.tourinfo=data;console.log('getpackages: ' + JSON.stringify(data))}
    );
  }


}
