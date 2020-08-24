import { HttpClient } from '@angular/common/http';
import { Store } from "@ngrx/store";
import { Injectable } from '@angular/core';
import * as ProjectActions from '../actions/projects.actions';
import { getLoadedProjectDataState, getAllProjectData, AppState, getSelectedProject } from '../reducers/projects.reducers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  baseUrl = 'http://localhost:4201/api/projects';
  constructor( private store: Store<AppState>, private http: HttpClient) { }

  loadProjectData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  load() {
    this.store.dispatch(new ProjectActions.LoadProjectDataBegin());
  }

  getProjectData() {
    return this.store.select(getLoadedProjectDataState);
  }

  getAllLoadedProjects() {
    return this.store.select(getAllProjectData);
  }

  selectProject(project) {
    this.store.dispatch(new ProjectActions.SelectProjectData(project))
  }
}
