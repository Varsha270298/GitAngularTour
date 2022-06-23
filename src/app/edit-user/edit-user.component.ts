import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../core/api.service";
import { User } from '../model/user.model';
<<<<<<< HEAD
//import { User } from '../core/model/user.model';
=======

>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user!: User;
  editForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
<<<<<<< HEAD
      role:['',Validators.required]
     
=======
      
      role: ['', Validators.required]
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255
    });
    this.apiService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['list-user']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> 33bfac33becbfb2b5aa454c8e64861c204564255
