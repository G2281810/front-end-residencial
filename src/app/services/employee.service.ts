import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

url:string="https://backendresidencialiaa.herokuapp.com/api/v1"
  
constructor(private http:HttpClient) {
   }

  getEmployees():Observable<any>{

    return this.http.get(`${this.url}/employees`)
  }
}
