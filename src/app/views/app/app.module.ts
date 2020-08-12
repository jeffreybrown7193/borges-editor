import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [ProjectsComponent, AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule
  ]
})
export class AppModule { }

