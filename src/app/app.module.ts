import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutContainersModule } from './containers/layout/layout.containers.module';
import { reducers, metaReducers } from './reducers/index.reducers';
import { ProjectEffects } from './effects/projects.effects';

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ProjectEffects])

  ],
  declarations: [
    AppComponent
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
