import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Project } from 'src/app/interfaces/project';
import { AppState } from 'src/app/reducers/projects.reducers';

@Component({
  selector: 'app-project-structure-sidebar',
  templateUrl: './project-structure-sidebar.component.html',
  styleUrls: ['./project-structure-sidebar.component.scss']
})
export class ProjectStructureSidebarComponent implements OnInit {
  projects: Observable<Project[]>;
  selectedProject: any;
  public project:Project;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.select('projects').subscribe((projects) => {
      this.projects = projects.selectedProject;
      this.useSelectedProject(this.projects);
    });

  }

  useSelectedProject(projects:any){
    return this.project = projects.payload.selectedProject;
  }


}
