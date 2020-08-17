import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

export interface IProjectsResponse {
  "name": string;
  "description": string;
}

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  public projects: IProjectsResponse[];
  constructor(private http: HttpClient) { }

  getAllProjects() {
    if (environment.production == true) {
      return this.http.get('/api/projects');
    } else {
      return this.http.get<IProjectsResponse>('http://localhost:4201/api/projects');
    }
  }

}
