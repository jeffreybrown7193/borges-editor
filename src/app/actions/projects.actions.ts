import { Action, createAction } from '@ngrx/store';
import { Project } from 'src/app/interfaces/project';

export const loadProjects = createAction('[Projects Dashboard] Load Projects');
export const loadProjectsSuccess = createAction('[Projects Dashboard] Load Projects Success');
