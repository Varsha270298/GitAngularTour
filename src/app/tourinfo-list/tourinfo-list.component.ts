import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tour } from '../tour';
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
  @Input() mytours:Tour[]=[];
  private _listFilter:string="";
  filteredTour:ITourInfo[]= [];
  addtourInfoForm!: FormGroup;

  constructor(private tourservice:TourinfoService,private router:Router, private route: ActivatedRoute,private formbuilder:FormBuilder) { }
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    console.log('Setter value :',value);
    this.filteredTour=this.performFilter(value);
  }

  ngOnInit(): void {
    this.initForm();
    this.getAllPackages();

  }
  initForm(){
    this.addtourInfoForm=this.formbuilder.group({
      startDate:'',
	    endDate:'',
	    noOfPersons:[0,[Validators.required,Validators.max(10)]],
	    payMode:['',[Validators.required]],
	    confirm:['',[Validators.required]],
	    
    });
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
  
  onSave(){
        

  }


}
