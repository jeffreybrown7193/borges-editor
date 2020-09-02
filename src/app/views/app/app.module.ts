import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ProjectDashboardComponent } from './projects/project-dashboard/project-dashboard.component';
import { ProjectStudioComponent } from './projects/project-studio/project-studio.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [AppComponent, ProjectDashboardComponent, ProjectStudioComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ComponentsModule,
    MatSliderModule
  ],
})
export class AppModule { }
