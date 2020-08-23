import { HttpClient } from '@angular/common/http';
import { Store } from "@ngrx/store";
import { Injectable } from '@angular/core';
import * as ProjectActions from '../actions/projects.actions';
import { getLoadedProjectDataState, getAllProjectData, AppState } from '../reducers/projects.reducers';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=davidfosterwallace';
  constructor( private store: Store<AppState>, private http: HttpClient) { }

  loadProjectData() {
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
}
