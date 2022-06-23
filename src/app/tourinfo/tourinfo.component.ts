import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITourInfo } from './tourInfo';
import { TourinfoService } from './tourinfo.service';

@Component({
  selector: 'app-tourinfo',
  templateUrl: './tourinfo.component.html',
  styleUrls: ['./tourinfo.component.css']
})
export class TourinfoComponent implements OnInit {
  tour!:ITourInfo;
  title:string="ReserevedPacakges";
  t!:ITourInfo;
  sub!:Subscription;
  id:number=2;
  
  constructor(private tourservice:TourinfoService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getReservebyId(this.id);

  }
   getReservebyId(id:number){
    this.tourservice.getReservedpackageById(id).subscribe(
      data=>{this.t=data;console.log('getpackages: ' + JSON.stringify(data))}
     )
   }
   editPackage(t:ITourInfo):void{
    this.router.navigate(['/tourinfo-edit'])
  }
   
    
 
  

  }




