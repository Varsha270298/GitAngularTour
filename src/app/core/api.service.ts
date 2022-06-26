
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs/index";


import { ApiResponse } from '../api.response';
import { User } from '../model/user.model';

@Injectable({providedIn:'root'})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8282/users/';

  login(loginPayload:any) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8282/' + 'token/generate-token', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
  getUsername(name:string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'username/'+name);
  }
}
