import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization } from '../model/organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {


  addOrgURL : string;
  getOrgURL : string;
  updateOrgUrl : string;
  deleteOrgUrl : string;

  constructor(private http: HttpClient) {

    this.addOrgURL = 'http://localhost:3000/orgList'
    this.getOrgURL = 'http://localhost:3000/orgList'
    this.updateOrgUrl = 'http://localhost:3000/orgList'
    this.deleteOrgUrl = 'http://localhost:3000/orgList'

   }

   addOrganization(org : Organization): Observable<Organization>{
     return this.http.post<Organization>(this.addOrgURL,org);
   }

  getAllOrganization(): Observable<Organization[]>{
    return this.http.get<Organization[]>(this.getOrgURL);
   }

   updateOrganization(org : Organization): Observable<Organization>{
     return this.http.put<Organization>(this.updateOrgUrl+'/'+org.id,org);
   }

   deleteOrganization(org : Organization): Observable<Organization>{
     return this.http.delete<Organization>(this.deleteOrgUrl+'/'+org.id);
   }
}
