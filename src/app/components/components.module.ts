import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsListItemComponent } from './project-components/projects-list-item/projects-list-item.component';

@NgModule({
  declarations: [ProjectsListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectsListItemComponent
  ]
})
export class ComponentsModule { }
