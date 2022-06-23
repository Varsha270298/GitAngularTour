import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getAllTours():Observable<any[]> 
  { return  this.http.get<any>("http://localhost:8282/Tour_Management/tour");
    
      }
  constructor(private http:HttpClient) { }
}
