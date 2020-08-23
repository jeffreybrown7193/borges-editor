import { Component, OnInit, Input } from '@angular/core';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { Store, State } from '@ngrx/store';
import { Project, Projects } from 'src/app/interfaces/project';
import { AppState, initialState } from 'src/app/states/states'
import { LoadProjectDataBegin } from 'src/app/actions/projects.actions';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { toArray } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})

export class ProjectsListItemComponent implements OnInit {
  public projectsList = {}
  public projects: any

  constructor(private store: Store<AppState>, private projectsService: ProjectDataService) {

  }

  ngOnInit() {
    return this.projectsService.loadProjectData().subscribe(data => this.projects = data.items);
  }

}
