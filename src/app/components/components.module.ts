import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListItemComponent } from './project-components/projects-list-item/projects-list-item.component';

@NgModule({
  declarations: [ProjectsListItemComponent],
  imports: [
    CommonModule,
    HttpClientModule  ],
  exports: [
    ProjectsListItemComponent
  ]
})
export class ComponentsModule { }
