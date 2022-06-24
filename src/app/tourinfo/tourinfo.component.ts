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
  
  title:string="ReserevedPacakges";
  t!:ITourInfo;
  sub!:Subscription;
  id!:1;
  
  constructor(private tourservice:TourinfoService,private router:Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tourservice.getReservedpackageById(1).subscribe(
      data=>{this.t=data}
    );

   

  }
  //  getReservebyId(id:number){
  //   this.tourservice.getReservedpackageById(id).subscribe(
  //     data=>{this.t=data;console.log('getpackages: ' + JSON.stringify(data))}
  //    )
  //  }
   editPackage(t:ITourInfo):void{
    console.log(t);
    this.router.navigate(['/tourinfo/'+ t.reserevdPackageId])
    
  }
  
   
    
 
  

  }




