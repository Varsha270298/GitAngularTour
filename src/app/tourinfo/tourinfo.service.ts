import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf, of, tap } from 'rxjs';
import { ITourInfo } from './tourInfo';

@Injectable({
  providedIn: 'root'
})
export class TourinfoService {
   private _baseurl='http://localhost:8282/customer/reservedtour';
   private _url='http://localhost:8282/customer/resereveid/';
   private _urlUpdate='http://localhost:8282/customer/updatereservetour';
   private _urlGetAll='http://localhost:8282/reservedpackages';
  constructor(private http: HttpClient) {}
  
  
  getReservedpackageById(id:number): Observable<any>{
    console.log(id);
    return this.http.get<any>(this._url+id)
    
  }
  updatepackages(tour:ITourInfo): Observable<any> {
    return this.http.put<any>(this._urlUpdate,tour);
  }
  getAllReservedPackages():Observable<any>{
    return this.http.get<any>(this._urlGetAll);
  }
  addTourInfoPackage(tourpackages: ITourInfo):Observable<any>{
    return this.http.post<any>(this._baseurl, tourpackages);
  }
  
  }
 



