import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Main Theme Variables
  appLogo: string = "";
  appName: string = "";
  primaryColor: string = "red";
  secondaryColor: string = "black";
  headerBGColor: string = "#212223";
  footerBGColor: string = "#212223";
  backgroundColor: string = "#353c42";
  textPrimaryColor: string = "white";
  textSecondaryColor: string = "red";


  // Spinner Theme Variables
  spinnerBGColor: string = "rgba(0, 0, 0, 0.8)"
  spinnerSize: any= "large"
  spinnerColor: string = "#fff"
  spinnerType: string = "ball-atom"
  spinnerLoadingText: string = "";

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  setTheme(object: any){
    this.setGlobalTheme(object);
    this.setSpinnerTheme(object);
    this.setThemeCSS();
  }

  setGlobalTheme(object: any){
    this.appLogo = object['app.logo'];
    this.appName = object['app.name'];
    this.primaryColor = object['primary.color'];
    this.secondaryColor = object['secondary.color'];
    this.headerBGColor = object['header.bg.color'];
    this.footerBGColor = object['footer.bg.color'];
    this.backgroundColor = object['bg.color'];
    this.textPrimaryColor = object['text.primary.color'];
    this.textSecondaryColor = object['text.secondary.color'];
  }

  setSpinnerTheme(object: any){
    this.spinnerBGColor = object['spinner.bg.color'];
    this.spinnerSize = object['spinner.size'];
    this.spinnerColor = object['spinner.color'];
    this.spinnerType = object['spinner.type'];
    this.spinnerLoadingText = object['spinner.loading.text'];
  }

  setThemeCSS(){
    this.document.documentElement.style.setProperty('--primaryColor', this.primaryColor);
    this.document.documentElement.style.setProperty('--secondaryColor', this.secondaryColor);
    this.document.documentElement.style.setProperty('--headerBGColor', this.headerBGColor);
    this.document.documentElement.style.setProperty('--footerBGColor', this.footerBGColor);
    this.document.documentElement.style.setProperty('--backgroundColor', this.backgroundColor);
    this.document.documentElement.style.setProperty('--textPrimaryColor', this.textPrimaryColor);
    this.document.documentElement.style.setProperty('--textSecondaryColor', this.textSecondaryColor);
  }
}
