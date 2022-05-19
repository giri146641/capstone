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

    this.addOrgURL = 'https://localhost:7183/api/OrganizationDetails'
    this.getOrgURL = 'https://localhost:7183/api/OrganizationDetails'
    this.updateOrgUrl = 'https://localhost:7183/api/OrganizationDetails'
    this.deleteOrgUrl = 'https://localhost:7183/api/OrganizationDetails'

   }

   addOrganization(org : Organization): Observable<Organization>{
     return this.http.post<Organization>(this.addOrgURL,org);
   }

  getAllOrganization(): Observable<Organization[]>{
    return this.http.get<Organization[]>(this.getOrgURL);
   }

   updateOrganization(org : Organization): Observable<Organization>{
     return this.http.put<Organization>(this.updateOrgUrl+'/'+org.organizationNumber,org);
   }

   deleteOrganization(org : Organization): Observable<Organization>{
     return this.http.delete<Organization>(this.deleteOrgUrl+'/'+org.organizationNumber);
   }
}
