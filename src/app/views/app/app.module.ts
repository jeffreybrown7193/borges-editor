import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ProjectsComponent } from 'src/app/views/app/projects/projects.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [AppComponent, ProjectsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ComponentsModule
  ]
})
export class AppModule { }

