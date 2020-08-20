import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Store, select, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { Get_Projects, Select_Project, Create_Project } from 'src/app/actions/projects.actions';
import { ProjectReducer, ProjectState } from 'src/app/reducers/project.reducers';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})

export class ProjectsListItemComponent implements OnInit {

  constructor(private store: Store<ProjectState>) { }

  ngOnInit() {
    this.ProjectState$ = this.store.pipe(select('projects'));

    let getProjectAction: Action = {
      type: Get_Projects
    }

    this.ProjectSubscription = this.ProjectState$.pipe(map(x => this.ProjectsList = x.ProjectsList)).subscribe();
    this.store.dispatch(getProjectAction);

  }

  ProjectState$: Observable<ProjectState>;
  ProjectSubscription: Subscription;
  ProjectList: Project[];

  ngOnDestroy() {
      this.ProjectSubscription.unsubscribe();
  }
}
