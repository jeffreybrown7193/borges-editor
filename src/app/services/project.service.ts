import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { createAction,createReducer, props, on, createSelector } from '@ngrx/store';
import { Store, select } from '@ngrx/store';
import { Project } from 'src/app/interfaces/project'
import { Observable } from 'rxjs';

export const initialState: Project = {
  _id: 0
}
export const projectStoreage = createAction ('[Projects Dashboard] Select Project',props<{ project:Project }>());
const projectReducer = createReducer(initialState, on(projectStoreage, (state, { project }) => ({ _id: project._id })));

export function reducer(state, action) {
  return projectReducer(state, action);
}


export interface ProjectState {
  project: Project;
}

export interface AppState {
  project: ProjectState;
}

export const selectProject = (state: AppState) => state.project;

export const selectFeatureCount = createSelector(
  selectProject,
  (state: ProjectState) => state.project
);


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project$: Observable<object>;
  constructor( private http: HttpClient, private store: Store<{ project: object }>) {
    this.project$ = store.pipe(select('project'));
  }

  //returns all projects in database
  getAllProjects() {
    if (environment.production == true) {
      return this.http.get('/api/projects');
    } else {
      return this.http.get('http://localhost:4201/api/projects');
    }
  }
  //

  storeProject(project){
    console.log(project);
    this.store.dispatch(projectStoreage(project))
  }
}
