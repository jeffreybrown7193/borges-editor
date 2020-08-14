import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsListItemComponent } from './project-components/projects-list-item/projects-list-item.component';
import { ProjectsDashboardMenuComponent } from './project-components/projects-dashboard-menu/projects-dashboard-menu.component';

@NgModule({
  declarations: [ProjectsListItemComponent, ProjectsDashboardMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectsListItemComponent
  ]
})
export class ComponentsModule { }
