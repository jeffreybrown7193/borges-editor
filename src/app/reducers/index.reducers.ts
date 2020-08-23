import {
  ActionReducerMap,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";

import * as fromData from "./projects.reducers";

export interface AppState {
  data: fromData.ProjectDataState;
}

export const reducers: ActionReducerMap<AppState> = {
  data: fromData.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const getLoadedProjectDataState = (state: AppState) => state.data;
export const getAllProjectData = createSelector(
  getLoadedProjectDataState,
  fromData.getProjects
);
