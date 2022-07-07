import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { ThemeService } from './services/crucial/theme.service';
import { DnsService } from './services/crucial/dns.service';
import { fromEvent, BehaviorSubject, Observable } from 'rxjs';
import {filter} from 'rxjs/operators';
import { TemplateSwitchService } from './services/crucial/template-switch.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'acumen-dns';
  currentRoute: string = "";
  isHomeTemplate: boolean = false;
  is404Template: boolean = false;
  
  @ViewChild('baseTemplate')
  BaseTpl!: TemplateRef<any>;
  @ViewChild('homeTemplate')
  HomeTpl!: TemplateRef<any>;
  @ViewChild('notAvailTemplate')
  NotAvailTpl!: TemplateRef<any>;

  private readonly layoutChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(
    private templateSwitch: TemplateSwitchService,
    private themeService: ThemeService, 
    private dnsService: DnsService, 
    private loc: Location, 
    private router: Router,
    private elementRef: ElementRef){
  }

  ngOnInit(){
    this.themeService.setThemeCSS();
    this.initialize();
    /* (No use now) */
    //this.handler();
  }

  /* Host native element (No use now)*/
  private get element() {
    return this.elementRef.nativeElement;
  } 

  /* Variable to Change Layout (No use now)*/
  public get navigationContent(): any{
    if(this.isHomeTemplate && !this.is404Template){
      return this.HomeTpl;
    }
    else if(!this.isHomeTemplate && this.is404Template){
      return this.NotAvailTpl;
    }else{
      return this.BaseTpl;
    }
  }

  /* Handler to handle listen value changes on false click event (No use now)*/
  handler(){
    fromEvent(this.element, 'click').subscribe(() => { 
      this.isHomeTemplate = this.templateSwitch.isHomeTemplate;
      this.is404Template = this.templateSwitch.is404Template
      this.layoutChange.next(true);
    });
  }

  /* Initialization Function */
  initialize(){
    /* (No use now) */
    /* this.templateSwitch.setHostElementRef(this.elementRef); */
    var domain = this.dnsService.setURLInfo(this.loc.path());
  }

}
