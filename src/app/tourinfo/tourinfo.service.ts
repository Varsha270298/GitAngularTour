import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ITourInfo } from './tourInfo';

@Injectable({
  providedIn: 'root'
})
export class TourinfoService {
   private url='http://localhost:8282/Tour_Management/customer/resereveid/';
   private urlUpdate='http://localhost:8282/Tour_Management/customer/updatereservetour';
  
  constructor(private http: HttpClient) {}
  
  
  getReservedpackageById(id:number): Observable<any>{
    return this.http.get<any>(this.url + id)
  }
  updateUser(tour:ITourInfo): Observable<any> {
    return this.http.put<any>(this.urlUpdate,tour);
  }
  
  
  }
 



