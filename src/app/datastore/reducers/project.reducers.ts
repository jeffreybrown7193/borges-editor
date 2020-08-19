import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Project } from '../../interfaces/project';
import { environment } from '../../../environments/environment';

// Project Reducers //
export interface ProjectState {
  projectData: Project | null;
}
const initialProjectState: ProjectState = {
  projectData: null
};
// // // // // // // //



export interface AppState {
  project: ProjectState;
}

export const reducers: ActionReducerMap<AppState> = {
  project: projectReducer
};

export function projectReducer(state: ProjectState = initialProjectState, action: ProjectAction): ProjectState {
  switch (action.type) {
    case ProjectActionTypes.SelectProject:
      return {
        projectData: action.payload.projectData
      };

    default:
      return state;

  }
}

export const selectedProject = (state: AppState) => state.project.projectData;
export const metaReducers: MetaReducer<ProjectState>[] = !environment.production ? [] : [];
