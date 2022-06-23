import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ITourInfo } from './tourInfo';

@Injectable({
  providedIn: 'root'
})
export class TourinfoService {
   private _url='http://localhost:8282/Tour_Management/customer/resereveid/';
   private _urlUpdate='http://localhost:8282/Tour_Management/customer/updatereservetour';
   private _urlGetAll='http://localhost:8282/Tour_Management/reservedpackages';
  constructor(private http: HttpClient) {}
  
  
  getReservedpackageById(id:number): Observable<any>{
    return this.http.get<any>(this._url + id)
  }
  updatepackages(tour:ITourInfo): Observable<any> {
    return this.http.put<any>(this._urlUpdate,tour);
  }
  getAllReservedPackages():Observable<any>{
    return this.http.get<any>(this._urlGetAll);
  }
  
  }
 



