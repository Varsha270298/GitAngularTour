import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAddService } from '../admin-add.service';
import {first} from "rxjs/operators";
import { Tour } from '../tour';

@Component({
  selector: 'app-edit-tour-information-system',
  templateUrl: './edit-tour-information-system.component.html',
  styleUrls: ['./edit-tour-information-system.component.css']
})
export class EditTourInformationSystemComponent implements OnInit {
 
  editForm!: FormGroup;
  tour!: Tour;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private apiService:AdminAddService) { }
  ngOnInit() { 
      // this._route.paramMap.subscribe(parameterMap =>{
      //   const id =+parameteterMap.getItem('editPackageId')
      // })


      let tourId = window.localStorage.getItem("editPackageId");
      console.log(tourId)
    // if(!packageId) {
    //   alert("Invalid action.")
    //   this.router.navigate(['viewtour']);
    //   return;
    // }
  this.editForm = this.formBuilder.group({
    packageId!: [''],
packageName: ['', Validators.required],
description: ['', Validators.required],
numberOfDays: ['', Validators.required],
amountPerPerson: ['', Validators.required],
modeOfTransportation: ['', Validators.required],
hotel: ['', Validators.required]
});
 console.log( this.apiService.getTourById(+!tourId))
//  .subscribe( data => {
//   this.editForm.setValue(data.result);
//   });
  

  }
onSubmit() {
  this.apiService.updateTour(this.editForm.value)
    .pipe(first())
    .subscribe(
      (      data: { status: number; message: any; }) => {
        if(data.status === 200) {
          alert('Package updated successfully.');
          this.router.navigate(['listtour']);
        }else {
          alert(data.message);
        }
      },
     );
}
  
}
  