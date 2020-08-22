import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { loadProjectsAction, loadProjects, loadProjectsSuccessAction, loadProjectsSuccess } from '../actions/projects.actions';
import { Observable } from 'rxjs';
import { ProjectsService } from '../services/project.service';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectEffects {
  constructor(private projectService: ProjectsService,
    private actions$: Actions
  ) {}


  @Effect() loadProjects$: Observable<Action> = this.actions$.pipe(
    ofType<loadProjectsAction>(loadProjects),
    mergeMap(() => this.projectService.getAll().pipe(
      map(projects => (new loadProjectsSuccessAction(projects)))
    ))
  )

}
