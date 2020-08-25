import { LoadProjects, ProjectActionTypes, ActionsUnion } from "../actions/projects.actions";
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface ProjectState {
  projectData: any | null;
  error: string | null;
}

const InitialProjectState: ProjectState = {
  projectData: null,
  error: null
};

export interface AppState {
  projects: ProjectState
}


export function projectReducer(state: ProjectState = InitialProjectState, action: ActionsUnion): ProjectState {
  switch (action.type) {
    case ProjectActionTypes.LoadProjects:
      return {
        projectData: state,
        error: null
      }

    case ProjectActionTypes.LoadProjectsSuccess:
      return {
        projectData: action.payload.projectData,
        error: null
      }

    default:
      return state;
  }
}



export const reducers: ActionReducerMap<AppState> = {
  projects: projectReducer
}

export const selectProjects = (state: AppState) => state.projects.projectData;
export const selectError = (state: AppState) => state.projects.error;




export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
