import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ProjectsComponent } from 'src/app/views/app/projects/project-dashboard/project-dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReadingListsComponent } from './reading-lists/reading-lists.component';


@NgModule({
  declarations: [AppComponent, ProjectsComponent, ReadingListsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ComponentsModule
  ]
})
export class AppModule { }

