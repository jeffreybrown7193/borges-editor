import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ActionTypes, LoadProjectDataFailure, LoadProjectDataSuccess, SelectProjectData } from '../actions/projects.actions';
import { of } from 'rxjs';
import { ProjectDataService } from '../services/project-data.service';
import { map, switchMap, catchError, timestamp } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectEffects {
  constructor(private projectDataService: ProjectDataService,
    private actions: Actions
  ) {}

  @Effect()
  getProjects = this.actions.pipe(
    ofType(ActionTypes.LoadProjectData),
    switchMap(() => {
      return this.projectDataService.loadProjectData().pipe(
        map(projectData => new LoadProjectDataSuccess({ projectData: projectData })),
        catchError(error =>
          of(new LoadProjectDataFailure({ error: error }))
        )
      );
    })
  );

  @Effect()
  selectProjectData = this.actions.pipe(
    ofType(ActionTypes.SelectProjectData),
    map((projectData => new SelectProjectData({ selectedProject: projectData}))));

}
