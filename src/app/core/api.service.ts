// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import {Customer} from "../customer/customer";
// import {Observable} from "rxjs/index";
// import {ApiResponse} from "./api.response";

// @Injectable()
// export class ApiService {

//   constructor(private http: HttpClient) { }
//   baseUrl: string = 'http://localhost:8282/Tour_Management/cust/';

// //   login(loginPayload:any) : Observable<any> {
// //     return this.http.post<any>('http://localhost:8282/' + 'token/generate-token', loginPayload);
// //   }

//   getCustomer() : Observable<any> {
//     return this.http.get<any>(this.baseUrl);
//   }

//   getCustomerId(customer_id: number): Observable<ApiResponse> {
//     return this.http.get<ApiResponse>(this.baseUrl + customer_id);
//   }

//   createCustomer(customer: Customer): Observable<ApiResponse> {
//     console.log(customer);
//     return this.http.post<ApiResponse>(this.baseUrl, customer);
//   }

// //   updateCustomer(customer: Customer): Observable<ApiResponse> {
// //     return this.http.put<ApiResponse>(this.baseUrl + customer.customer_id, customer);
// //   }

//   deleteCustomer(customer_id: number): Observable<ApiResponse> {
//     return this.http.delete<ApiResponse>(this.baseUrl + customer_id);
//   }
// }
