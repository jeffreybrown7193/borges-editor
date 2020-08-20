import ActionWithPayload from "../actions/projects.actions";
import Project from "../interfaces/project";
import * as ProjectActions from "../actions/projects.actions";
import { Action } from "@ngrx/store";

export interface ProjectState {
  selected: Project,
  projectsList: Project[]
}

export const initializeState = (): ProjectState => {
  return ({
    selected: null,
    projectsList: []
  });
}


const initialState = initializeState();

export function ProjectReducer(state: ProjectState = initialState,
    action: Action) {

    switch (action.type) {
        case ProjectActions.Get_Projects:
            return { ...state, selected: {}, projectsList: [] };

        default:
            return state;
    }
}
