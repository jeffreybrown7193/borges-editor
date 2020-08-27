import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

let routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app/app.module').then((m) => m.AppModule)
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
