import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../controllers/project.service';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})

export class ProjectsListItemComponent implements OnInit {

  constructor(private projectService: ProjectService) {
    this.getData();
  }

  ngOnInit() { }

  getData(): void {
    this.projectService.getProject();
  }

}
