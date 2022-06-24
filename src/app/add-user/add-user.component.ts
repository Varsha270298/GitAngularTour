import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm!: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
<<<<<<< HEAD
      id: [],
=======
      //id: [],
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255
      username: ['', Validators.required],
      password: ['', Validators.required],
      role:['',Validators.required]
      
    });

  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-user']);
      });
  }

}
