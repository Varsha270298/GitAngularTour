import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AdminAddService } from '../admin-add.service';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {

  message:any;

  constructor(private formBuilder: FormBuilder,private router: Router,private apiService: AdminAddService) { }
  addForm!: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      packageId: ['', Validators.required],
      packageName: ['', Validators.required],
      description: ['', Validators.required],
      numberOfDays: ['', Validators.required],
      hotel: ['', Validators.required],
      modeOfTransportation: ['', Validators.required],
      amountPerPerson: ['', Validators.required]

    });
  }

  onSubmit() {
    this.apiService.addTour(this.addForm.value)
     
      .subscribe( data =>this.message=data);
  }

}
 