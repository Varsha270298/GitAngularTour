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
  private url:string="http://localhost:8282/tour/addtour";
   private GetUrl : string= "http://localhost:8282/tour/id/";
   private updateUrl: string= "http://localhost:8282/tour/edittour";
    private listUrl: string= "http://localhost:8282/tour";
   private deleteUrl: string= "http://localhost:8282/tour/id/";

  
  addTour(tour:Tour): Observable<any> {
    return this.http.post<any>(this.url, tour);
  }

  getTour() : Observable<any> {
    return this.http.get<any>(this.listUrl);
  }

  getTourById(id: number): Observable<any> {
    return this.http.get<any>(this.GetUrl + id);
  }
  deleteTourById(id: number): Observable<any> {
    return this.http.delete<any>(this.deleteUrl + id);
  }
 updateTour(tour:Tour): Observable<any> {
    //return this.http.put<ApiResponse>(this.updateUrl + tour.packageId, tour);
    return this.http.put<any>(this.updateUrl, tour);
  }


}
