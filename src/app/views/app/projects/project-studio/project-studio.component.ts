import { Component, OnInit } from '@angular/core';
import { createSelector } from '@ngrx/store';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/interfaces/project'

@Component({
  selector: 'app-project-studio',
  templateUrl: './project-studio.component.html',
  styleUrls: ['./project-studio.component.scss']
})
export class ProjectStudioComponent implements OnInit {

  constructor(private ProjectService: ProjectService) { }

  ngOnInit(): void {
  }




}
``
