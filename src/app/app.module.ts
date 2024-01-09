import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular-highcharts';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { CountUpModule } from 'ngx-countup';
import { CounterupComponent } from './components/counterup/counterup.component';
import { DatafilesComponent } from './components/datafiles/datafiles.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LogoComponent,
    HeaderComponent,
    BestsellersComponent,
    CounterupComponent,
    DatafilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }