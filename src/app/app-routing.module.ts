import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Import from @gilsdav/ngx-translate-router
import {LocalizeRouterModule, LocalizeParser, LocalizeRouterSettings} from '@gilsdav/ngx-translate-router';
import {LocalizeRouterHttpLoader} from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateService } from '@ngx-translate/core';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: 'dns'
  },
  { 
    path: 'dns', 
    loadChildren: () => import('./dns/dns.module').then(m => m.DnsModule) 
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      alwaysSetPrefix: false,
      parser: {
        provide: LocalizeParser,
        useFactory: (translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) =>
            new LocalizeRouterHttpLoader(translate, location, settings, http),
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
    
  exports: [RouterModule]
})
export class AppRoutingModule { }
