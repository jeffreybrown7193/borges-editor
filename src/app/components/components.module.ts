import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListItemComponent } from './project-components/projects-list-item/projects-list-item.component';
import { ProjectStructureSidebarComponent } from './project-components/project-structure-sidebar/project-structure-sidebar.component';
import { AppRoutingModule } from '../views/app/app.routing';

@NgModule({
  declarations: [ProjectsListItemComponent, ProjectStructureSidebarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule],
  exports: [
    ProjectsListItemComponent,
    ProjectStructureSidebarComponent
  ]
})
export class ComponentsModule { }
