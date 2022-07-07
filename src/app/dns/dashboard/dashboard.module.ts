import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DirectivesModule } from 'src/app/directives/directives.module';

import { QueryPercentComponent } from './widgets/query-percent/query-percent.component';
import { QueryBlockedComponent } from './widgets/query-blocked/query-blocked.component';
import { QueryTotalComponent } from './widgets/query-total/query-total.component';
import { TotalQueriesGraphComponent } from './widgets/total-queries-graph/total-queries-graph.component';
import { QueryTypesGraphComponent } from './widgets/query-types-graph/query-types-graph.component';
import { QueryAnsGraphComponent } from './widgets/query-ans-graph/query-ans-graph.component';
import { ClientActivityGraphComponent } from './widgets/client-activity-graph/client-activity-graph.component';
import { TopPermittedDomainsComponent } from './widgets/top-permitted-domains/top-permitted-domains.component';
import { TopBlockedDomainsComponent } from './widgets/top-blocked-domains/top-blocked-domains.component';
import { TopClientsAllComponent } from './widgets/top-clients-all/top-clients-all.component';
import { TopClientsBlockedComponent } from './widgets/top-clients-blocked/top-clients-blocked.component';
import { BlocklistDomainsComponent } from './widgets/blocklist-domains/blocklist-domains.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BlocklistDomainsComponent,
    QueryPercentComponent,
    QueryBlockedComponent,
    QueryTotalComponent,
    TotalQueriesGraphComponent,
    QueryTypesGraphComponent,
    QueryAnsGraphComponent,
    ClientActivityGraphComponent,
    TopPermittedDomainsComponent,
    TopBlockedDomainsComponent,
    TopClientsAllComponent,
    TopClientsBlockedComponent,
  ],
  imports: [
    AccordionModule,
    CommonModule,
    RouterModule,
    DirectivesModule,
    TranslateModule,
    NgxChartsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
