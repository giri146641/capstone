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

    this.addOrgURL = 'http://localhost:9091/org/addOrganization'
    this.getOrgURL = 'http://localhost:9091/org/getAll'
    this.updateOrgUrl = 'http://localhost:9091/org/updateOrganization'
    this.deleteOrgUrl = 'http://localhost:9091/org/deleteOrganizationById'

   }

   addOrganization(org : Organization): Observable<Organization>{
     return this.http.post<Organization>(this.addOrgURL,org);
   }

  getAllOrganization(): Observable<Organization[]>{
    return this.http.get<Organization[]>(this.getOrgURL);
   }

   updateOrganization(org : Organization): Observable<Organization>{
     return this.http.put<Organization>(this.updateOrgUrl,org)
   }

   deleteOrganization(org : Organization): Observable<Organization>{
     return this.http.delete<Organization>(this.deleteOrgUrl+'/'+org.id);
   }
}
