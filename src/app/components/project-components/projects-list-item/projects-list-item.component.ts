import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../controllers/project.service';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})

export class ProjectsListItemComponent implements OnInit {

  returnedData: any;
  projectsList: object;
  projects: any;

  constructor(public projectService: ProjectService) {

  }

  ngOnInit() {
    return this.getData();
  };

  getData() {
    this.projectService.getProject().subscribe((projectsList) => {
      this.projectsList = projectsList;
    });
  }

}
