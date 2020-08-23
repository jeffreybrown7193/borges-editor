import { Action } from "@ngrx/store";

export enum ActionTypes {
  LoadProjectData = "[Project Data] Load Project Data Begin",
  LoadProjectDataSuccess = "[Project Data] Load Project Data Success",
  LoadProjectDataFailure = "[Project Data] Load Project Data Failure"
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

export type ActionsUnion = LoadProjectDataBegin | LoadProjectDataSuccess | LoadProjectDataFailure;
