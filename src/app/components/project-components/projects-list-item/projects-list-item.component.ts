import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, State } from '@ngrx/store';
import { Project, Projects } from 'src/app/interfaces/project';
import { loadProjectsAction } from 'src/app/actions/projects.actions';
import { AppState, initialState } from 'src/app/states/states'

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.scss']
})

export class ProjectsListItemComponent implements OnInit {
  projects$: Observable<any>;
  @Input() projects: Project[];


  constructor(private store: Store<AppState>) {
    this.projects$ = this.store.select('projects');
  }

  ngOnInit() {
    this.getProjects();
    this.projects$.subscribe((state:AppState) => this.projects = initialState.projects);
  }

  getProjects() {
    console.log(this.store)
    this.store.dispatch(new loadProjectsAction());
  }

}
