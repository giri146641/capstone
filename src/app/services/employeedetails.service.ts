import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeedetailsService {

  constructor(private http:HttpClient) { }

  getEmployeeData(){
    return this.http.get("https://localhost:7183/api/EmployeeDetails");
  }
}
