import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TseService } from './tse.service';
import { HttpModule} from '@angular/http';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpModule,
    ChartsModule,
  ],
  providers: [
    TseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
