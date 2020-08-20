import { Action } from "@ngrx/store";
import Project from "../interfaces/project";

export const Get_Projects = '[Project Dashboard] Get Projects';
export const Create_Project = '[Project Dashboard] Create Project';
export const Select_Project = '[Project Dashboard] Select Project';

export default interface ActionWithPayload<T> extends Action {
  payload: T;
}

export class GetProjects implements Action {
    readonly type = Get_Projects;

    constructor() { }
}

export class SelectProject implements Action {
  readonly type = Select_Project;

  constructor() { }
}

export class CreateProject implements ActionWithPayload<Project> {
    readonly type = Create_Project;
    payload: Project;

    constructor(payload: Project) {
        this.payload = payload;
    }
}

export type All = GetProjects | SelectProject | CreateProject ;
