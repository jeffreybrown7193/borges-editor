import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from '../../shared/shared.module';
import { LayoutContainersModule } from '../../containers/layout/layout.containers.module';
import { ProjectDashboardComponent } from '../../views/app/projects/project-dashboard/project-dashboard.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { ReadingListsComponent } from './reading-lists/reading-lists.component';
import { ProjectStudioComponent } from './projects/project-studio/project-studio.component';

@NgModule({
  declarations: [AppComponent, ProjectDashboardComponent, ReadingListsComponent, ProjectStudioComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ComponentsModule,
    RouterModule
  ]
})
export class AppModule { }

