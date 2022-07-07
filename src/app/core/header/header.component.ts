import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SessionService } from 'src/app/services/security/session.service';
import { DnsService } from 'src/app/services/crucial/dns.service';
import { ThemeService } from 'src/app/services/crucial/theme.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * This is the toggle button elemenbt
   */
  @ViewChild('toggleButton')
  toggleButton!: ElementRef;
  @ViewChild('menu')
  menu!: ElementRef;

  showMenu: boolean = false;

  constructor(
    private sessionService: SessionService, 
    private dnsService: DnsService, 
    private themeService: ThemeService,
    private deviceService: DeviceDetectorService, 
    private renderer: Renderer2) {
      if(this.deviceService.isMobile()){
        this.clickEventListener();
      }
  }

  ngOnInit(): void {
  }

  clickEventListener(){
     /**
     * This events get called by all clicks on the page
     */
    this.renderer.listen('window', 'click',(e:Event)=>{
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
     if(!this.toggleButton.nativeElement.contains(e.target) && !this.menu.nativeElement.contains(e.target)){
        this.showMenu = false;
     }
    });
  }

  get isLogin(){
    return this.sessionService.isLogin;
  }

  get isMobile(){
    return this.deviceService.isMobile();
  }

  get isDesktop(){
    return this.deviceService.isDesktop() || this.deviceService.isTablet();
  }

  get isRunning(){
    return this.dnsService.isRunning;
  }

  get AppLogo(){
    return this.themeService.appLogo;
  }

  get AppName(){
    return this.themeService.appName;
  }

  get Name(){
    return this.dnsService.hostName;
  }

  get Temperature(){
    return this.dnsService.hostTemp;
  }

  get Load(){
    return this.dnsService.hostLoad;
  }

  get MemoryUsage() {
    return this.dnsService.hostMemUsage;
  }

  get StatusClass(){
    if(this.isRunning && this.Temperature && this.Load && this.MemoryUsage){
      return "nav__active-status";
    }else if(this.isRunning && !(this.Temperature || this.Load || this.MemoryUsage)){
      return "nav__warning-status";
    }else {
      return "nav__error-status";
    }
  }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

}
