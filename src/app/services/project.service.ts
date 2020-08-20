import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsList: Object;
  constructor( private http: HttpClient) { }

  //returns all projects in database
  getAllProjects() {
    if (environment.production == true) {
      return this.http.get('/api/projects');
    } else {
      return this.http.get('http://localhost:4201/api/projects');
    }
  }
  //

}
