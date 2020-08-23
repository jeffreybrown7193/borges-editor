import { ActionsUnion, ActionTypes } from "../actions/projects.actions";
import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';

export interface ProjectDataState {
  projects: string[];
  selectedProject: string;
  loading: boolean;
  error: any;
}

export const InitialState: ProjectDataState = {
  projects: [],
  selectedProject: '',
  loading: false,
  error: null
};

export function reducer(
  state = InitialState,
  action: ActionsUnion
): ProjectDataState {
  switch (action.type) {
    case ActionTypes.LoadProjectData: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case ActionTypes.LoadProjectDataSuccess: {
      return {
        ...state,
        loading: false,
        projects: action.payload.projectData
      };
    }

    case ActionTypes.LoadProjectDataFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }

    case ActionTypes.SelectProjectData: {
      return {
        ...state,
        loading: false,
        selectedProject: action.payload.selectedProject,
        error: null
      };
    }

    default: {
      return state;
    }
  }
}

export const getProjects = (state: ProjectDataState) => state.projects;
export const getSelectedProject = (state: ProjectDataState) => state.selectedProject;

export interface AppState {
  data: ProjectDataState;
}

export const reducers: ActionReducerMap<AppState> = {
  data: reducer
};

export const getLoadedProjectDataState = (state: AppState) => state.data;
export const getAllProjectData = createSelector(
  getLoadedProjectDataState,
  getProjects
);
