import { Action } from '@ngrx/store';
import { Project } from '../interfaces/project';

export enum ProjectActionTypes {
  LoadProjects = '[Project Dashboard] Load Projects',
  LoadProjectsSuccess = '[Project Dashboard] Load Projects Success',
  ProjectsError = '[Project Dashboard] Projects Error'
}

export class LoadProjects implements Action {
  readonly type = ProjectActionTypes.LoadProjects;
  constructor({ }) {
  }
}

export class LoadProjectsSuccess implements Action {
  readonly type = ProjectActionTypes.LoadProjectsSuccess;
  constructor(readonly payload: { projectData: any }) {

  }
}

export class ProjectsError implements Action {
  readonly type = ProjectActionTypes.ProjectsError;

  constructor(readonly payload: { error: string }) {

  }
}

export type ActionsUnion = LoadProjects | LoadProjectsSuccess | ProjectsError;
