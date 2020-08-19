import { Action } from '@ngrx/store';
import { Project } from '../../interfaces/project';


export enum ProjectActionTypes {
  LoadProjects = '[Projects Dashboard] Load Projects',
  SelectProject = '[Projects Dashboard] Select Project',
  ProjectsError = '[Projects Dashboard] Projects Error'
}

export class ProjectAction implements Action {
  type: string;
  payload: {
    projectData: Project,
    error: string
  };
}

export class LoadProjects implements Action {
  readonly type = ProjectActionTypes.LoadProjects;

  constructor(readonly payload: {projectData: Object}) {

  }
}

export class SelectProject implements Action {
  readonly type = ProjectActionTypes.SelectProject;

  constructor(readonly payload: {projectData: Project}) {

  }
}

export class ProjectsError implements Action {
  readonly type = ProjectActionTypes.ProjectsError;

  constructor(readonly payload: {error: string}) {

  }
}


export type ActionsUnion = LoadProjects | SelectProject | ProjectsError;
