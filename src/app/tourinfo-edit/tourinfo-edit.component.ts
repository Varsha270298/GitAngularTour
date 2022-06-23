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
export class TourinfoEditComponent implements OnInit, AfterViewInit, OnDestroy {
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
    this.tourInfoForm=this.formBuilder.group({
     
      packageName:'',
      description:'',
	    startDate:['',Validators.required],
	    endDate:['',Validators.required],
	    noOfPersons:[0,Validators.required,Validators.max(10)],
	    numberOfDays:0,
      amountPerPerson:0,
	    modeOfTransportation:'',
	    paymode:['',Validators.required],
	    confirm:['',Validators.required],
      hotel:'',
	    statusof:['',Validators.required],
      
    

    })
  

  }
  get endDate() { 
    return this.tourInfoForm.get('endDate'); 
  }
  
  onSubmit(){
    this.tourservice.updatepackages(this.tourInfoForm.value).subscribe(
      data=>{
        if(data.status==200){
          alert('Updated Successfully');
          this.router.navigate(['/tourinfo']);
        }
        else{
         alert(data.message);
        }
      }
    );

  }
  onCancel():void{
    console.log('on cancel')
  //  this.router.navigateByUrl('/tourinfo');
   
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
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  

}
