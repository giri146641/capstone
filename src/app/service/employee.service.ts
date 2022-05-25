import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  getEmpURL : string;

  constructor(private http: HttpClient) { 
    this.getEmpURL = 'https://localhost:7183/api/EmployeeDetails/GetAllEmployees'
  }


  getAllEmployee(id: number): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmpURL+'/'+id);
   }
}
