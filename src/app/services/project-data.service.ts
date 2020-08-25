import { HttpClient } from '@angular/common/http';
import { Store } from "@ngrx/store";
import { Injectable } from '@angular/core';
import { ProjectState } from '../reducers/projects.reducers';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  baseUrl = 'http://localhost:4201/api/projects';
  constructor( public store: Store<ProjectState>, public http: HttpClient) { }

  public LoadProjects( ) {
    return this.http.get(this.baseUrl);
  }



}
