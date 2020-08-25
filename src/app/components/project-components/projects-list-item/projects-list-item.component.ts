import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { Project } from 'src/app/interfaces/project';
import { AppState, ProjectState } from 'src/app/reducers/projects.reducers';
import { LoadProjects } from 'src/app/actions/projects.actions';
import { toArray, map } from 'rxjs/operators';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})

export class ProjectsListItemComponent implements OnInit {
  projects: Observable<Project[]>;
  loadedProjects: Project[];
  project: ProjectState;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadProjects({projectData: null}));
  }

  ngOnInit() {
    this.store.select('projects').subscribe((projects) => {
      this.projects = projects.projectData;
      this.useProjects(this.projects);
    });
  }

  useProjects(projects:any){
    return this.loadedProjects = projects;
  }

  onSelect(project){
    console.log(this.project);
  }


}
