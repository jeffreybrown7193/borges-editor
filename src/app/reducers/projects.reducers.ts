import { Action, createReducer, on, State, ActionReducerMap } from '@ngrx/store';
import { loadProjects, loadProjectsSuccess } from '../actions/projects.actions';
import { AppState, initialState } from '../states/states';
import { Project, Projects } from '../interfaces/project';
import { Actions } from '@ngrx/effects';


const projectsReducer = createReducer(
  initialState,
  on(loadProjects, state => ({ ...state,})),
  on(loadProjectsSuccess, state => ({ ...state, projects: state.projects}))
);


export function reducer(state: State, action: Action) {
  return projectsReducer(state, action);
}

