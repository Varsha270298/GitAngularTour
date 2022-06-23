import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

    staffForm = new FormGroup({
    userId: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,]),
    status: new FormControl('',[Validators.required,]),
    reservePackageId: new FormControl('',[Validators.required]),
  })

  get userId(){
    return this.staffForm.get('userId');
  }

  get password(){
    return this.staffForm.get('password');
  }

  get status(){
    return this.staffForm.get('status');
  }

  get reservePackageId(){
    return this.staffForm.get('reservePackageId');
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.staffForm.value);

  }
}
