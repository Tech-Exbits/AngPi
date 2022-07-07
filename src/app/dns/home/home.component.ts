import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DnsService } from 'src/app/services/crucial/dns.service';
import { ThemeService } from 'src/app/services/crucial/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dnsService: DnsService, 
    private themeService: ThemeService,
    private deviceService: DeviceDetectorService,) { }

  ngOnInit(): void {
  }

  get isMobile(){
    return this.deviceService.isMobile();
  }

  get isDesktop(){
    return this.deviceService.isDesktop() || this.deviceService.isTablet();
  }

  get AppLogo(){
    return this.themeService.appLogo;
  }

  get AppName(){
    return this.themeService.appName;
  }

}
