import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from "../core/api.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-tour-information-system',
  templateUrl: './edit-tour-information-system.component.html',
  styleUrls: ['./edit-tour-information-system.component.css']
})
export class EditTourInformationSystemComponent implements OnInit {
  editForm!: FormGroup;
 
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router/*,private apiService:  ApiService*/) { }
  ngOnInit() { 
    let packageId = window.localStorage.getItem("packageId");
    if(!packageId) {
      alert("Invalid action.")
      this.router.navigate(['list-packages']);
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
/*this.apiService.getUserById(+packageId)
.subscribe( (data: { result: { [key: string]: any; }; }) => {
  this.editForm.setValue(data.result);
});*/
  }
onSubmit() {
  this.apiService.updateUser(this.editForm.value)
    .pipe(first())
    .subscribe(
      (      data: { status: number; message: any; }) => {
        if(data.status === 200) {
          alert('Package updated successfully.');
          this.router.navigate(['list-packages']);
        }else {
          alert(data.message);
        }
      },
     );
}
  
}
  