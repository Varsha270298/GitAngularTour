import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _url= 'http://localhost:8282/Tour_Management/customer/';
  constructor(private _http:HttpClient) { }
   updateById(id:number):Observable<any>{
    return this._http.get<any>(this._url+id);

   }
}
