import { Project, Projects } from '../interfaces/project';

export interface AppState {
  projects: Project[]
}

export const initialState: AppState = {
  projects: []
};
