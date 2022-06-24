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
   private url : string= "http://localhost:8282/tour/addtour";
   private updateUrl: string= "http://localhost:8282/tour/edittour";
    private listUrl: string= "http://localhost:8282/tour";
  //  private updateUrl: string= "http://localhost:8282/Tour_Management/tour";

  
  addTour(tour:Tour): Observable<any> {
    return this.http.post<any>(this.url, tour);
  }

  getTour() : Observable<any> {
    return this.http.get<any>(this.listUrl);
  }

  getTourById(id: number): Observable<any> {
    return this.http.get<any>(this.url + id);
  }
  deleteTourById(id: number): Observable<any> {
    return this.http.delete<any>(this.url + id);
  }
 updateTour(tour:Tour): Observable<ApiResponse> {
    //return this.http.put<ApiResponse>(this.updateUrl + tour.packageId, tour);
    return this.http.put<ApiResponse>(this.updateUrl, tour);
  }


}
