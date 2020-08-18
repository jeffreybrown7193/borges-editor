import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { StoreModule, Store } from '@ngrx/store';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})

export class ProjectsListItemComponent implements OnInit {
  projectsList: Object;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    return this.getAllProjects();
  };

  getAllProjects() {
    this.projectService.getAllProjects().subscribe((projectsList) => {
      this.projectsList = projectsList;
    });
  }

  selectProject(project){
    this.projectService.storeProject(project);
  }

}
