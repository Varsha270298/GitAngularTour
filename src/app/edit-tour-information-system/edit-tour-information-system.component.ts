import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAddService } from '../admin-add.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-tour-information-system',
  templateUrl: './edit-tour-information-system.component.html',
  styleUrls: ['./edit-tour-information-system.component.css']
})
export class EditTourInformationSystemComponent implements OnInit {
  editForm!: FormGroup;
 
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private apiService:AdminAddService) { }
  ngOnInit() { 
    let packageId = window.localStorage.getItem("packageId");
    if(!packageId) {
      alert("Invalid action.")
      this.router.navigate(['viewtour']);
      return;
    }
  this.editForm = this.formBuilder.group({
    packageId: [''],
packageName: ['', Validators.required],
description: ['', Validators.required],
numberOfDays: ['', Validators.required],
amountPerPerson: ['', Validators.required],
modeOfTransportation: ['', Validators.required],
hotel: ['', Validators.required]
});
// this.apiService.getTourById(+packageId)
// .subscribe( (data: { result: { [key: string]: any; }; }) => {
//   this.editForm.setValue(data.result);
// });
  }
onSubmit() {
  this.apiService.updateTour(this.editForm.value)
    .pipe(first())
    .subscribe(
      (      data: { status: number; message: any; }) => {
        if(data.status === 200) {
          alert('Package updated successfully.');
          this.router.navigate(['viewtour']);
        }else {
          alert(data.message);
        }
      },
     );
}
  
}
  