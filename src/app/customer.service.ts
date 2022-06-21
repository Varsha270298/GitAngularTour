import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getAllTours():Observable<any[]> 
  { return  this.http.get("http://localhost:9090/GitAngularTour/rest/TourInformationSystem").
    
      }
  constructor(private http:HttpClient) { }
}
