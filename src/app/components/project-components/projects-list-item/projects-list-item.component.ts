import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss'],
  providers: [ProjectService]
})

export class ProjectsListItemComponent implements OnInit {
  projectsList: object;
  constructor(
    public projectService: ProjectService,

    ) {
  }

  ngOnInit() {
    return this.getData();
  };

  getData() {
    this.projectService.getAllProjects().subscribe((projectsList) => {
      this.projectsList = projectsList;
    });
  }

}
