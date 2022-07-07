import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainAccessService {

  currentDomain: string = "";

  AccessStatus: boolean = false; 

  ALLOWED_MODE = true;

  RESTRICTED_MODE = false;

  AllowedDomains: string[] = [];

  RestrictedDomains: string[] = [];

  BetaAccessDomains: string[] = [];

  constructor() { }

  set CurrentDomain(domain: string){
    this.currentDomain = domain;
  }

  get isActive(): boolean {
    return this.AccessStatus;
  }
  
  get ActiveMode(): string {
    if(this.ALLOWED_MODE && !this.RESTRICTED_MODE){
      this.AccessStatus = true;
      return "Allowed Domains";
    }
    else if(!this.ALLOWED_MODE && this.RESTRICTED_MODE){
      this.AccessStatus = true;
      return "Restricted Domains";
    }
    else if(this.ALLOWED_MODE && this.RESTRICTED_MODE){
      this.ALLOWED_MODE = false;
      this.AccessStatus = true;
      return "Domain Access Service is not active";
    }
    else if(!this.ALLOWED_MODE && !this.RESTRICTED_MODE){
      this.AccessStatus = false;
      return "Domain Access Service is not active";
    }
    else{
      this.AccessStatus = false;
      return "Domain Access Service is not active";
    }
  }

  get FilteringMode(): string {
    return this.ActiveMode;
  }

  get DomainFilteringMode(): string {
    return this.ActiveMode;
  }

  public isRequestAllowed(domain?: string): boolean{
    if(!domain){
      domain = this.currentDomain;
    }

    if(this.isActive){
      var mode = this.ActiveMode;
      if(mode === "Allowed Domains"){
        return this.AllowedDomains.includes(domain.toLowerCase());
      }else{
        return !this.RestrictedDomains.includes(domain.toLowerCase());
      }
    } else {
      return true;
    }
  }

  public hasBetaAccess(domain?: string): boolean{
    if(!domain){
      domain = this.currentDomain;
    }
    var mode = this.ActiveMode;
    if(this.isActive){
      return this.BetaAccessDomains.includes(domain.toLowerCase());
    }else {
      return false;
    }
  }
}
