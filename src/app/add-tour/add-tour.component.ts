import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AdminAddService } from '../admin-add.service';
import { Tour } from '../tour';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {
  // addtour: Tour = new Tour();

  // addForm = new FormGroup({
  //   packageName: new FormControl('',[Validators.required,Validators.minLength(5)]),
  //   description: new FormControl('',[Validators.required, Validators.minLength(5)]),
  //   hotel: new FormControl('',[Validators.required ]),
  //   amountPerPerson: new FormControl(''),
  //   numberOfDays: new FormControl(''),
  //   modeOfTransportation: new FormControl(''),
  //    packageId: new FormControl('')

  // });
  
 
   
  
  // constructor(private adminAddService: AdminAddService,
  //   private router: Router) { }

  // ngOnInit(): void {
  // }
  // savePackage(){
  //   // this.apiService.addTour(this.addForm.value)
  //   this.adminAddService.addTour(this.addForm.value).subscribe( data =>{
  //     console.log(data);
  //     this.goToTourList();
  //   },
  //   error => console.log(error));
  // }

  //   goToTourList(){
  //     this.router.navigate(['/listtour']);
  //   }

    
  //   onSubmit(){
  //     // console.log(this.addtour);
  //     console.log('Package value', this.addForm.value)
  //     this.savePackage();
  //   }


  message:any;
  constructor(private formBuilder: FormBuilder,private router: Router,private apiService: AdminAddService) { }
  addForm!: FormGroup;
  
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
    
      packageId: ['', Validators.required],
      
      packageName: ['', Validators.required],
      description: ['', Validators.required],
      numberOfDays: ['', Validators.required],
      hotel: ['', Validators.required],
      modeOfTransportation: ['', Validators.required],
      amountPerPerson: ['', Validators.required]

    });
    // get packageName() { return this.addForm.get('packageName'); }
  }

  // get f() { return this.addForm.controls; }
  onSubmit() {
    this.router.navigate(['listtour']);
    this.apiService.addTour(this.addForm.value)
    
     
      // .subscribe( data =>this.message=data);
      .subscribe( data => {
        console.log('Submitted');
        this.router.navigate(['listtour']);
      });
  }
  Booking(){
    alert('Tour Has Been Booked Successfully');
    this.router.navigate(['listtour']);
}

}
