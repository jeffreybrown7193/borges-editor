import { Component, OnInit, Input } from '@angular/core';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { Store, State, select } from '@ngrx/store';
import { AppState, initialState } from 'src/app/states/states'
import { ProjectDataService } from 'src/app/services/project-data.service';
import { Projects, Project } from 'src/app/interfaces/project';
import { LoadProjectDataBegin, SelectProjectData } from 'src/app/actions/projects.actions';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})

export class ProjectsListItemComponent implements OnInit {
  projects: Observable<any>;
  loadedProjects: Array<any>;
  project: Project[];

  constructor(private store: Store<AppState>, private projectsService: ProjectDataService) {}

  ngOnInit() {
    return this.store.dispatch(new LoadProjectDataBegin());
  }

  selectProject(_id){
    this.projectsService.selectProject(_id);
    return this.store.dispatch(new SelectProjectData(_id));
  }

}
