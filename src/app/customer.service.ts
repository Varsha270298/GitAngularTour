import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getAllTours():Observable<any[]> 
<<<<<<< HEAD
  {
     return  this.http.get("http://localhost:9090/GitAngularTour/rest/TourInformationSystem").
    
}
=======
  { return  this.http.get<any>("http://localhost:8282/Tour_Management/tour");
>>>>>>> eeb72d4408782f74d271a4f6b08c826ced11702a
    
  constructor(private http:HttpClient) { }
}
