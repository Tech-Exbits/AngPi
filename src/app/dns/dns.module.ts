import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from '../directives/directives.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DnsRoutingModule } from './dns-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    AccordionModule,
    CommonModule,
    DashboardModule,
    RouterModule,
    DirectivesModule,
    DnsRoutingModule,
    TranslateModule,
    NgxChartsModule,
  ]
})
export class DnsModule { }
