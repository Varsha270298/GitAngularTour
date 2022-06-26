import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,FormControlName, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, merge, Observable, Subscription,debounceTime } from 'rxjs';

import { GenericValidator } from '../Shared/generic-validator';
import { ITourInfo } from '../tourinfo/tourInfo';

import { TourinfoService } from '../tourinfo/tourinfo.service';


@Component({
  selector: 'app-tourinfo-edit',
  templateUrl: './tourinfo-edit.component.html',
  styleUrls: ['./tourinfo-edit.component.css']
})
export class TourinfoEditComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];
  title:string="ReserevedTourPackage";
  tourInfoForm!: FormGroup;
  sub!:Subscription;

 
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  constructor(private formBuilder: FormBuilder,private tourservice:TourinfoService,private router: Router,private _route:ActivatedRoute) {

    this.validationMessages = {
      startDate:{
        required:'Starting Date is Required',
       },
       noOfPersons:{
        required:'No Of Person travelling is Required',
        max:'Maximum 10 members'
       },
       paymode:{
       required:'transcation type is Required',
      }
     
   };
   this.genericValidator = new GenericValidator(this.validationMessages);
  }
 
  ngOnInit(): void {
    this.initForm();
    this.tourservice.getReservedpackageById( this._route.snapshot.params['id']).subscribe(
      data=>{
        console.log(data)
        this.tourInfoForm.controls['reserevdPackageId'].setValue(data.reserevdPackageId);
        this.tourInfoForm.controls['packageName'].setValue(data.packageName);
        this.tourInfoForm.controls['description'].setValue(data.description);
        this.tourInfoForm.controls['startDate'].setValue(data.startDate);
        this.tourInfoForm.controls['endDate'].setValue(data.endDate);
        this.tourInfoForm.controls['noOfPersons'].setValue(data.noOfPersons);
        this.tourInfoForm.controls['numberOfDays'].setValue(data.numberOfDays);
        this.tourInfoForm.controls['amountPerPerson'].setValue(data.amountPerPerson);
        this.tourInfoForm.controls['modeOfTransportation'].setValue(data.modeOfTransportation);
        this.tourInfoForm.controls['payMode'].setValue(data.payMode);
        this.tourInfoForm.controls['confirm'].setValue(data.confirm);
        this.tourInfoForm.controls['hotel'].setValue(data.hotel);
        this.tourInfoForm.controls['status'].setValue(data.status);
    
      }
    );
    
    

  }
  initForm(){
    this.tourInfoForm=this.formBuilder.group({
      reserevdPackageId:'',
      packageName:'',
      description:'',
	    startDate:'',
	    endDate:'',
	    noOfPersons:[0,[Validators.required]],
	    numberOfDays:0,
      amountPerPerson:0,
	    modeOfTransportation:'',
	    payMode:['',[Validators.required]],
	    confirm:['',[Validators.required]],
      hotel:'',
	    status:['',],
      
    

    });
    
  }
  get endDate() { 
    return this.tourInfoForm.get('endDate'); 
  }
  
  onSubmit(){
    this.tourservice.updatepackages(this.tourInfoForm.value).subscribe(
      data=>{
        console.log(JSON.parse(data));
        
      }
    );
    alert('Updated Successfully');
          this.router.navigate(['/tourinfo']);
  }
  cancel():void{
    this.router.navigate(['/tourinfo']);
  }
  ngAfterViewInit(): void {
    
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
      merge(this.tourInfoForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.tourInfoForm);
    });
  }
  
  

}
