import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITourInfo } from './tourInfo';
import { TourinfoService } from './tourinfo.service';

@Component({
  selector: 'app-tourinfo',
  templateUrl: './tourinfo.component.html',
  styleUrls: ['./tourinfo.component.css']
})
export class TourinfoComponent implements OnInit {
  
  title:string="ReserevedPacakges";
  tourinfo:ITourInfo[]=[];
  sub!:Subscription;
  
  constructor(private tourservice:TourinfoService) { }

  ngOnInit(): void {
  }
   getReservebyId(id:number){
    this.tourservice.getReservedpackageById(id).subscribe(
      data=>{this.tourinfo=data;console.log('getpackages: ' + JSON.stringify(data))}
     )
   }
   
    
 
  

  }




