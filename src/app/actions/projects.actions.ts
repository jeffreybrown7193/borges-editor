import { Action } from "@ngrx/store";

export enum ActionTypes {
  LoadProjectData = "[Project Data] Load Project Data Begin",
  LoadProjectDataSuccess = "[Project Data] Load Project Data Success",
  LoadProjectDataFailure = "[Project Data] Load Project Data Failure",
  SelectProjectData = "[Project Data] Select Project Data"
}

export class LoadProjectDataBegin implements Action {
  readonly type = ActionTypes.LoadProjectData;
}

export class LoadProjectDataSuccess implements Action {
  readonly type = ActionTypes.LoadProjectDataSuccess;
  constructor(public payload: { projectData: any }) {}
}

export class LoadProjectDataFailure implements Action {
  readonly type = ActionTypes.LoadProjectDataFailure;
  constructor(public payload: { error: any }) {}
}

export class SelectProjectData implements Action {
  readonly type = ActionTypes.SelectProjectData;
  constructor(public payload: { selectedProject: number }) {}
}

export type ActionsUnion = LoadProjectDataBegin | LoadProjectDataSuccess | LoadProjectDataFailure | SelectProjectData;
