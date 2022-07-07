/* Service Depreciated */
import { Injectable, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateSwitchService {

  isHomeTemplate: boolean = false;
  is404Template: boolean = false;

  /* Variable to get host */
  hostElementRef!: ElementRef<any>;
  public templateSwitcher = new Subject<any>();

  constructor() { }
  
  switchTemplate(NotAvailTemplate: boolean, DefaultTemplate: boolean): any {
    this.templateSwitcher.next({
      NotAvailTemplate: NotAvailTemplate,
      DefaultTemplate: DefaultTemplate
    })
  }

  closeDialog() {
    this.templateSwitcher.next(0);
  }

  getTrigger(): Observable<any> {
    return this.templateSwitcher.asObservable();
  }

  setHostElementRef(elementRef: ElementRef<any>){
    this.hostElementRef = elementRef;
  }

  triggerFalseClick() {
    this.hostElementRef.nativeElement.click();
  }

  /* Method to Switch Dynamic Layouts*/
  setLayout(action: string, manualtriggerClick?: boolean){
    if(action == 'home'){
      this.isHomeTemplate = true;
      this.is404Template = false;
    }else if(action == "404"){
      this.isHomeTemplate = false;
      this.is404Template = true;
    }else{
      this.isHomeTemplate = false;
      this.is404Template = false;
    }
    if(!manualtriggerClick){
      this.triggerFalseClick();
    }
  }
}
