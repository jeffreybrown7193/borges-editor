import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutContainersModule } from './containers/layout/layout.containers.module';
import { ProjectEffects } from './effects/projects.effects';
import { reducers } from 'src/app/reducers/projects.reducers';
import { environment } from '../environments/environment';
import { IntegralUIModule } from '@lidorsystems/integralui-web/bin/integralui/integralui.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule,
    EffectsModule.forRoot([ProjectEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    IntegralUIModule

  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
