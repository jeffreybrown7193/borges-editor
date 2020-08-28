import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListItemComponent } from './project-components/projects-list-item/projects-list-item.component';
import { ProjectStructureSidebarComponent } from './project-components/project-structure-sidebar/project-structure-sidebar.component';
import { AppRoutingModule } from '../views/app/app.routing';
import { TextEditorComponent } from './editor-components/text-editor.component';
import { QuillModule } from 'ngx-quill';
import { ProjectFilesComponent } from './project-components/project-files/project-files.component';


@NgModule({
  declarations: [ProjectsListItemComponent, ProjectStructureSidebarComponent, TextEditorComponent, ProjectFilesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    QuillModule.forRoot()
  ],
  exports: [
    ProjectsListItemComponent,
    ProjectStructureSidebarComponent,
    TextEditorComponent,
    ProjectFilesComponent
  ]
})
export class ComponentsModule { }
