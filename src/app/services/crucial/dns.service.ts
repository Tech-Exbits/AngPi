import { Injectable } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ThemeService } from './theme.service';
import { UtilitiesService } from '../misc/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class DnsService {
  
  // domain
  public domain: string = "localhost";
  // baseURL
  public baseURL: string = "";
  // isRunning
  public isRunning: boolean = true;
  // hostName
  public hostName: string = "Lucifer";
  // hostTemp
  public hostTemp: string = "";
  // hostLoad
  public hostLoad: string = "";
  // hostMemUsage
  public hostMemUsage: string = "";

  constructor(
    private theme: ThemeService,
    private utilities: UtilitiesService,
    ) {}

  loader(action: string = "pageload") {
    var spinnerTemplate: Spinner = {
      bdColor: this.theme.spinnerBGColor, 
      size: this.theme.spinnerSize,
      color: this.theme.spinnerColor,
      type: this.theme.spinnerType,
    }
    this.utilities.loader(action, spinnerTemplate);
  }

  setURLInfo(url: any) {
    this.domain = this.utilities.getDomainfromURL(url);
    this.baseURL = this.utilities.getBaseURLfromURL(url);
  }


}
