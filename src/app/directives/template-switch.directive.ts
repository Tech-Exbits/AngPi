import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';
import { DnsService } from '../services/crucial/dns.service';
@Directive({
  selector: '[switch]'
})
export class TemplateSwitchDirective {
  currentRoute:string = "";
  Default: any;
  Home: any;
  NotFound: any;

  @Input()
  set DefaultTemplate(DefaultTemplate: TemplateRef<any>){
    this.Default = DefaultTemplate;
  }

  @Input()
  set HomeTemplate(HomeTemplate: TemplateRef<any>){
    this.Home = HomeTemplate;
  }

  @Input()
  set NotAvailTemplate(NotFoundTemplate: TemplateRef<any>){
    this.NotFound = NotFoundTemplate;
  }

  constructor(private router: Router, private viewContainer: ViewContainerRef, private dnsService: DnsService){
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {
          this.currentRoute = event.urlAfterRedirects;
          this.viewContainer.clear();
          if(this.currentRoute.includes('/dns/home') || this.currentRoute == '/'){
            this.viewContainer.createEmbeddedView(this.Home);
          }
          else if(this.currentRoute.includes('404')) {
            this.viewContainer.createEmbeddedView(this.NotFound);
          }
          else if(this.currentRoute.includes('pihole')) {
            this.viewContainer.createEmbeddedView(this.NotFound);
          }
          else{
            this.dnsService.loader("pageload");
            this.viewContainer.createEmbeddedView(this.Default);
          }
      });
  }

}
