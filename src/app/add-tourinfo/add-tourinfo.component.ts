import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAddService } from '../admin-add.service';
import { Tour } from '../tour';
import { TourinfoService } from '../tourinfo/tourinfo.service';

@Component({
  selector: 'app-add-tourinfo',
  templateUrl: './add-tourinfo.component.html',
  styleUrls: ['./add-tourinfo.component.css']
})
export class AddTourinfoComponent implements OnInit {
  @Input() mytours:Tour[]=[];
  cust:boolean=false;
  addtourInfoForm!: FormGroup;
  title:string='Add Resereve TourPackage'
  id:number=1;
  constructor(private formBuilder: FormBuilder,private tourservice:TourinfoService,private router: Router,private _route:ActivatedRoute,private adminservice:AdminAddService) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.mytours);
    this.adminservice.getTourById(this.id).subscribe(
      data=>{
        console.log(data);
        this.packageName=data.packageName;
        this.description=data.result.description;
        console.log(this.packageName);
        console.log(this.description);

        this.startDate=data.startDate;

   }
    )
  }
   
  initForm(){
    this.addtourInfoForm=this.formBuilder.group({
      reserevdPackageId:'',
      packageName:'this.mytours.packageName',
      description:this.description,
	    startDate:this.startDate,
	    endDate:this.endDate,
	    noOfPersons:[0,[Validators.required,Validators.max(10)]],
	    numberOfDays:0,
      amountPerPerson:0,
	    modeOfTransportation:'',
	    payMode:['',[Validators.required]],
	    confirm:['',[Validators.required]],
      hotel:'',
	    status:['',],
      
    

    });

}
get packageName(){
  return this.addtourInfoForm.get('packageName');

}
set packageName(packageName){
  this.packageName=packageName;
}
get description(){
  return this.addtourInfoForm.get('description');

}
set description(description){
  this.packageName=description;
}
get startDate(){
  return this.addtourInfoForm.get('startDate');

}
set startDate(startDate){
  this.startDate=startDate;
}
get endDate(){
  return this.addtourInfoForm.get('endDate');

}
set endDate(endDate){
  this.endDate=endDate;
}
save(){
  this.router.navigate(['/CustTourList']);
  
  }
  // this.tourservice.addTourInfoPackage(this.addtourInfoForm.value).subscribe(
  //   data=>{
  //     this.router.navigate(['tourinfo/:id']);
  // }
  // );

}

