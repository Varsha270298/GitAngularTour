import { Injectable } from '@angular/core';
import { Tour} from './tour';
import { HttpClient} from '@angular/common/http'
import {Observable} from "rxjs/index";
import {ApiResponse} from "./api.response";



@Injectable({
  providedIn: 'root'
})
export class AdminAddService {

   
  constructor(private http: HttpClient) { }
  baseUrl : string= "http://localhost:8282/Tour_Management/tour/addtour";

  
  addTour(tour:Tour): Observable<any> {
    return this.http.post<any>(this.baseUrl, tour);
  }

  getTour() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getTourById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }
  deleteTourById(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
 updateTour(tour:Tour): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + tour.packageId, tour);
  }


}
