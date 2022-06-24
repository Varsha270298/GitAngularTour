import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from '../Shared/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit,OnDestroy {
  sub!:Subscription;
  sampleForm: any;
  constructor(private custservice:CustomerService,private router:Router,private _route:ActivatedRoute) { }
  

  ngOnInit(): void {
    
    this.custservice.updateById( this._route.snapshot.params['id']).subscribe(
      data=>{
        console.log(data)
        this.sampleForm.controls['firstName'].setValue(data.firstName);
        this.sampleForm.controls['lastName'].setValue(data.lastName);
        this.sampleForm.controls['userId'].setValue(data.userId);
   
        this.sampleForm.controls['mobileNo'].setValue(data.mobileNo);
        this.sampleForm.controls['age'].setValue(data.age);
        this.sampleForm.controls['password'].setValue(data.password);

       
      }
    );
    
    
  }

  update()
  {
    this.custservice.updateById(this.sampleForm.value).subscribe(
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
  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

}
